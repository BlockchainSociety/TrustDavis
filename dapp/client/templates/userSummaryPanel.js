"use strict";

Template.userSummaryPanel.events({
    "click #btn-show-user-id": function (event) {
        Modal.show("userIdModal", {userId: this.user._id, name: this.user.name});
    },
    "click #btn-add-to-peers": function (event) {
        var peer = {
            fromId: Meteor.connection.userId(),
            objectId: this.user._id
        };
        Peers.simpleSchema().clean(peer);
        Meteor.call('newPeer', peer);
    }
});

Template.userSummaryPanel.helpers({
    showAddtoPeers: function() {
        return !this.user.isMyself() && !this.user.isPeer();
    }
});
