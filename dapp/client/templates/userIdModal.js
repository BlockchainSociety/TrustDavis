Template.userIdModal.events({
    'click #close': function(event, template) {
        event.preventDefault();
        Modal.hide("userIdModal");
    }
});
