Template.peerRow.events({
    "click .delete": function (event) {
        console.log("deleting peer", this._id);
        Meteor.call("deletePeer", this._id);
    }
});
