Template.peerRow.events({
    "click .edit": function (event) {
        console.log("editing peer", this);
        Modal.show("updatePeerModal", { peer: this });
    },
    "click .delete": function (event) {
        console.log("deleting peer", this._id);
        Meteor.call("deletePeer", this._id);
    }
});
