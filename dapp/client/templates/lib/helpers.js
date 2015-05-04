Template.registerHelper("toUpperCase", function(str) {
    return str.toUpperCase();
});

Template.registerHelper("formatDate", function(date) {
    return moment(date).format('YYYY-MM-DD');
});

Template.registerHelper("formatDateFromNow", function(date) {
    return moment(date).fromNow();
});

Template.registerHelper("formatPercentage", function(pct) {
    return pct.toFixed(1);
});

Template.registerHelper("userName", function(userId) {
    var user = Users.findOne({_id: userId});
    if (user) {
        return user.name || "[no name]";
    } else {
        return "[not found]";
    }
});

// Should make this a subscription so updates in realtime?
Template.registerHelper("userBalance", function(userId) {
    var user = Users.findOne({_id: userId});
    if (user) {
        return user.balance || "[no balance]";
    } else {
        return "[not found]";
    }
});

Template.registerHelper("isNewbie", function() {
    var user = Users.findOne({_id: Meteor.connection.userId()});
    return _.isUndefined(user);
});

Template.registerHelper('isChecked', function (a, b) {
    return (a === b) ? 'checked' : false;
});
