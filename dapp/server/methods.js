"use strict";

Meteor.methods({
    newTrade: function(trade) {
        check(trade, Trades.simpleSchema());
        // TODO further validate
        var newTradeId = Trades.insert(trade);
        return {_id: newTradeId};
    },
    cancelTrade: function(tradeId) {
        check(tradeId, String);
        // TODO validate status and that user is buyer or seller
        Trades.update({_id: tradeId}, {$set: {status: 'cancelled'}});
        return {_id: tradeId};
    },
    newReference: function(reference) {
        check(reference, References.simpleSchema());
        // TODO further validate
        var newReferenceId = References.insert(reference);
        return {_id: newReferenceId};
    },
    deleteReference: function(referenceId) {
        check(referenceId, String);
        // TODO validate status and that user is owner
        References.remove({_id: referenceId});
        return {_id: referenceId};
    }
});
