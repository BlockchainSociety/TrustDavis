Meteor.publish("my_trades", function() {
    // TODO limit to user specific trades
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

Meteor.publish("my_references", function() {
    // TODO limit to user specific references
    return [
        References.find()
    ]
});
