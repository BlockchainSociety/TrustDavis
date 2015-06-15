Template.tradeIdModal.events({
    'click #close': function(event, template) {
        event.preventDefault();
        Modal.hide("tradeIdModal");
    }
});
