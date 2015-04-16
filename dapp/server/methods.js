"use strict";

Meteor.methods({
    newTrade: function(trade) {
        check(trade, Trades.simpleSchema());

        var newTradeId = Trades.insert(trade);
        return {_id: newTradeId};
    }
});
