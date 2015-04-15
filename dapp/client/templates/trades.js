"use strict";

Template.trades.helpers({
    activeTrades: function() {
        return _.filter(Fixtures.trades, function(trade) {
            return trade.state !== "CANCELLED";
        });
    },
    closedTrades: function() {
        return _.filter(Fixtures.trades, function(trade) {
            return trade.state === "CANCELLED";
        });
    }
});
