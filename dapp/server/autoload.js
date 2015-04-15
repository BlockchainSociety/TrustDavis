Meteor.startup(function () {
    if (!Trades.find().count()) {
        _.each(Fixtures.trades, function(trade) {
            console.log("inserting trade fixture", trade._id);
            Trades.insert(trade);
        });
    }
});
