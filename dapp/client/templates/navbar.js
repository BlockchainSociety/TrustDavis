Template.navbar.events({
    "submit .search": function (event) {
        var searchId = event.target.searchId.value;

        if (searchId) {
            event.target.searchId.value = "";

            var user = Users.findOne({_id: searchId});
            if (user) {
                Router.go('userDetails', {userId: searchId});
            } else {
                Router.go('tradeDetails', {tradeId: searchId});
            }
        }

        return false;
    }
});

Template.navbar.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    },
    userId: function() {
        return Meteor.connection.userId();
    }
});
