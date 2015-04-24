AutoForm.addHooks(['updatePeerForm'], {
    before: {
        method: function(peer) {
            console.log('before', peer);
            Peers.simpleSchema().clean(peer);

            console.log('cleaned', peer);

            this.result(peer);
        }
    },
    after: {
        method: function(error, result) {
            if (error) {
                console.log("Update Error:", error);
            } else {
                console.log("Update Result:", result);
            }
            Modal.hide("updatePeerModal");
        }
    }
});

Template.updatePeerModal.events({
    'click #close': function(event, template) {
        event.preventDefault();
        Modal.hide("updatePeerModal");
    }
})

Template.updatePeerModal.helpers({
    updatePeerFormSchema: function() {
        return Peers.simpleSchema();
    }
});