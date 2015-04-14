Router.configure({
   layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('Home', {
        path: '/',
        template: 'home'
    });

    this.route('Trades', {
        path: '/trades',
        template: 'trades'
    });

    this.route('References', {
        path: '/references',
        template: 'references'
    });

    this.route('Contacts', {
        path: '/contacts',
        template: 'contacts'
    });
});
