"use strict";

AutoForm.addHooks(['newTradeForm'], {
    before: {
        method: function(doc) {
            if (doc.type === "sell") {
                doc.sellerId = Meteor.connection.userId();
            } else {
                doc.buyerId = Meteor.connection.userId();
            }
            Trades.simpleSchema().clean(doc);
            console.log("Trades doc with auto values", doc);
            this.result(doc);
        }
    },
    after: {
        method: function(error, result) {
            if (error) {
                console.log("Insert Error:", error);
            } else {
                console.log("Insert Result:", result);
                Router.go('tradeDetails', {tradeId: result._id});
            }
        }
    }
});

Template.newTradeForm.created = function() {
    this.type = "sell";
    this.validUntil = Helpers.tradeValidUntil();
};

Template.newTradeForm.helpers({
    newTradeFormSchema: function() {
        return Trades.simpleSchema();
    },
    type: function() {
        return Template.instance().type;
    },
    validDays: function() {
        return TRADE_VALID_DAYS;
    },
    validUntil: function() {
        return Template.instance().validUntil;
    }
});
