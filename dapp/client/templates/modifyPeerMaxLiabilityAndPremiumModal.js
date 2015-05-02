AutoForm.addHooks(['modifyPeerMaxLiabilityAndPremiumForm'], {
    before: {
        method: function(peer) {
            Peers.simpleSchema().clean(peer);
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
            Modal.hide("modifyPeerMaxLiabilityAndPremiumModal");
        }
    }
});

Template.modifyPeerMaxLiabilityAndPremiumModal.events({
    'click #close': function(event, template) {
        event.preventDefault();
        Modal.hide("modifyPeerMaxLiabilityAndPremiumModal");
    }
})

Template.modifyPeerMaxLiabilityAndPremiumModal.helpers({
    modifyPeerMaxLiabilityAndPremiumFormSchema: function() {
        return Peers.simpleSchema();
    }
});