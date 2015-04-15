Meteor.publish("trades", function() {
    // TODO limit to user trades / specific trades
    return [
        Trades.find()
    ]
});

Meteor.publish("trade", function(tradeId) {
    check(arguments, [Match.Any]);
    return [
        Trades.find({
          _id: tradeId
        })
    ];
});
