"use strict";

Template.newTradeForm.created = function() {
    this.type = "sell";
    this.validUntil = moment().add(TRADE_VALID_DAYS, 'days').endOf('day').format("YYYY-MM-DD");
};

Template.newTradeForm.helpers({
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

Template.newTradeForm.events({
    "submit .new-trade": function (event) {
        event.preventDefault();

        // TODO use autoform?
        // TODO show validation errors

        var trade = {
            type: Template.instance().type,
            description: event.target.description.value,
            price: Number(event.target.price.value),
            expiration: Template.instance().validUntil
        };

        var newTradeContext = Trades.simpleSchema().namedContext("newTrade");

        Trades.simpleSchema().clean(trade);
        if (newTradeContext.validate(trade)) {
            console.log("valid trade", trade);
            Meteor.call('newTrade', trade, function (error, result) {
                if (error) {
                    console.log("newTrade error", error);
                } else {
                    Router.go('tradeDetails', {tradeId: result._id});
                }
            });
        } else {
            console.log("invalid trade", newTradeContext.invalidKeys());
        }

        return false;
    }
});
