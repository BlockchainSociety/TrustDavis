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
            return {
                activeTrades: Trades.find({status: {$ne: 'cancelled'}}),
                closedTrades: Trades.find({status: 'cancelled'})
            };
        },
        waitOn: function() {
            return Meteor.subscribe('user_trades', Meteor.connection.userId());
        }
    });

    this.route('tradeDetails', {
        path: '/trade/:tradeId',
        template: 'tradeDetails',
        data: function() {
            return {
                trade: Trades.findOne({_id: this.params.tradeId})
            };
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

    this.route('contacts', {
        path: '/contacts',
        template: 'contacts',
        data: function() {
            return {
                myContacts: Contacts.find()
            };
        },
        waitOn: function() {
            return Meteor.subscribe('my_contacts');
        }
    });

    this.route('userDetails', {
        path: '/user/:userId',
        template: 'userDetails',
        data: function() {
            return {
                user: Users.findOne({_id: this.params.userId}),
                userTrades: Trades.find({ $or : [ { buyerId: this.params.userId }, { sellerId: this.params.userId } ] }),
                userReferences: References.find({insurerId: this.params.userId})
            };
        },
        waitOn: function() {
            return [
                Meteor.subscribe('user', this.params.userId),
                Meteor.subscribe('user_trades', this.params.userId),
                Meteor.subscribe('user_references', this.params.userId)
            ];
        }
    });

    this.route('notfound', {
        path: '/notfound',
        template: 'notfound'
    });
});
