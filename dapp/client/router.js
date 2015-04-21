Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});

// TODO subscription manager
Meteor.subscribe('all_users');

Router.map(function() {
    this.route('/', function() {
        this.redirect('trades');
    });

    this.route('trades', {
        path: '/trades',
        template: 'trades',
        data: function() {
            var userId = Meteor.connection.userId();
            return {
                activeTrades: Trades.find({
                    $or : [ { buyerId: userId }, { sellerId: userId } ],
                    status: {$ne: 'cancelled'}
                }),
                openTrades: Trades.find({
                    $or : [ { buyerId: null }, { sellerId: null } ],
                    status: {$ne: 'cancelled'}
                }),
                closedTrades: Trades.find({
                    $or : [ { buyerId: userId }, { sellerId: userId } ],
                    status: 'cancelled'
                })
            };
        },
        waitOn: function() {
            return [
                Meteor.subscribe('user_trades', Meteor.connection.userId()),
                Meteor.subscribe('open_trades')
            ];
        }
    });

    this.route('tradeDetails', {
        path: '/trade/:tradeId',
        template: 'tradeDetails',
        data: function() {
            var trade = Trades.findOne({_id: this.params.tradeId});

            if (!trade) {
                return undefined;
            } else {
                return {
                    trade: trade
                };
            }
        },
        waitOn: function() {
            return Meteor.subscribe('trade', this.params.tradeId);
        }
    });

    this.route('references', {
        path: '/references',
        template: 'references',
        data: function() {
            return {
                myReferences: References.find()
            };
        },
        waitOn: function() {
            return Meteor.subscribe('user_references', Meteor.connection.userId());
        }
    });

    this.route('peers', {
        path: '/peers',
        template: 'peers',
        data: function() {
            return {
                myPeers: Peers.find()
            };
        },
        waitOn: function() {
            return Meteor.subscribe('user_peers', Meteor.connection.userId());
        }
    });

    this.route('userDetails', {
        path: '/user/:userId',
        template: 'userDetails',
        data: function() {
            var user = Users.findOne({_id: this.params.userId});

            if (!user) {
                return undefined;
            } else {
                return {
                    user: user,
                    userTrades: Trades.find({
                        $or : [ { buyerId: this.params.userId }, { sellerId: this.params.userId } ]
                    }),
                    userPeers: Peers.find({fromId: this.params.userId})
                };
            }
        },
        waitOn: function() {
            return [
                Meteor.subscribe('user', this.params.userId),
                Meteor.subscribe('user_trades', this.params.userId),
                Meteor.subscribe('user_peers', this.params.userId)
            ];
        }
    });

    this.route('network', {
        path: '/network',
        template: 'network',
        data: function() {
            return {
                users: Users.find(),
                peers: Peers.find()
            };
        },
        waitOn: function() {
            return Meteor.subscribe('all_peers');
        }
    });
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});
