Router.configure({
   layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('/', function() {
        this.redirect('trades');
    });

    this.route('trades', {
        path: '/trades',
        template: 'trades'
    });

    this.route('references', {
        path: '/references',
        template: 'references'
    });

    this.route('contacts', {
        path: '/contacts',
        template: 'contacts'
    });
});
