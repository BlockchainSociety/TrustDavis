Meteor.publish("trades", function() {
    // TODO limit to user trades / specific trades
    return Trades.find();
});
