Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});

// TODO subscription manager

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
            return Meteor.subscribe('trades');
        }
    });

    this.route('tradeDetails', {
        path: '/trade/:tradeId',
        template: 'tradeDetails'
    });

    this.route('references', {
        path: '/references',
        template: 'references'
    });

    this.route('contacts', {
        path: '/contacts',
        template: 'contacts'
    });

    this.route('userDetails', {
        path: '/user/:userId',
        template: 'userDetails'
    });

    this.route('notfound', {
        path: '/notfound',
        template: 'notfound'
    });
});
