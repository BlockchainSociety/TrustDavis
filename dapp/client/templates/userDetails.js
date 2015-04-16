"use strict";

Template.userDetails.helpers({
    trades_title : function () {
        return this.user.name + "'s Trades";
    },

    references_title : function () {
        return this.user.name + "'s References";
    },

    trades_count: function () {
        return this.user_trades.count();
    },

    references_count: function () {
        return 0; // this.user_references.count();
    },

    not_myself: function() {
        return this.user._id != Meteor.connection.userId();
    }
});
