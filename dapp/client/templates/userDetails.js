"use strict";

Template.userDetails.helpers({
    tradesTitle : function () {
        return this.user.name + "'s Trades";
    },

    referencesTitle : function () {
        return this.user.name + "'s References";
    },

    tradesCount: function () {
        return this.userTrades.count();
    },

    referencesCount: function () {
        return 0; // this.user_references.count();
    },

    notMyself: function() {
        return this.user._id != Meteor.connection.userId();
    }
});
