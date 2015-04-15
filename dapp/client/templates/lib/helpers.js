Template.registerHelper("formatDate", function(date) {
    return moment(date).format('YYYY-MM-DD');
});
