Template.registerHelper("formatDate", function(date) {
    return moment(date).format('YYYY-MM-DD');
});

Template.registerHelper("formatDateFromNow", function(date) {
    return moment(date).fromNow();
});
