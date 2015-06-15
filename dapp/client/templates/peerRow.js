Template.peerRow.events({
    "click .modify_peer_max_liability_and_premium": function (event) {
        console.log("modifyPeerMaxLiabilityAndPremium", this);
        Modal.show("modifyPeerMaxLiabilityAndPremiumModal", { peer: this, objectId: this.objectId });
    },
    "click .delete": function (event) {
        console.log("deleting peer", this._id);
        Meteor.call("deletePeer", this._id);
    }
});
