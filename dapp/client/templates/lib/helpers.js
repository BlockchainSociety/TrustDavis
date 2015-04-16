Template.registerHelper("formatDate", function(date) {
    return moment(date).format('YYYY-MM-DD');
});

Template.registerHelper("formatDateFromNow", function(date) {
    return moment(date).fromNow();
});

Template.registerHelper("userName", function(userId) {
    var user = Users.findOne({_id: userId});
    if (user) {
        return user.name || "[no name]";
    } else {
        return "[not found]";
    }
});
