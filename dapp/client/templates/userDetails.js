"use strict";

Template.userDetails.helpers({
    tradesCount: function () {
        return this.userTrades.count();
    },

    peersCount: function () {
        return this.userPeers.count();
    },

    tradesTitle : function () {
        return this.user.name + "'s Trades";
    },

    peersTitle : function () {
        return this.user.name + "'s Peers";
    }
});
