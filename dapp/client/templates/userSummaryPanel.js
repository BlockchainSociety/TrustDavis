"use strict";

Template.userSummaryPanel.events({
    "click #btn-show-user-id": function (event) {
        Modal.show("userIdModal", {userId: this.user._id, name: this.user.name});
    },
    "click #btn-modify-balance": function (event) {
        console.log(this.user.name);
        Modal.show("userBalanceModal", {userId: this.user._id, balance: this.user.balance, name: this.user.name});
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
    },

    showBalanceForm: function() {
        return this.user.isMyself();
    }
});
