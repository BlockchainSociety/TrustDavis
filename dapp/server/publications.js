Meteor.publish("all_users", function() {
    check(arguments, [Match.Any]);
    return [
        Users.find()
    ];
});

Meteor.publish("all_peers", function() {
    check(arguments, [Match.Any]);
    return [
        Peers.find()
    ];
});

Meteor.publish("user", function(userId) {
    check(arguments, [Match.Any]);
    return [
        Users.find({
          _id: userId
        })
    ];
});

Meteor.publish("trade", function(tradeId) {
    check(arguments, [Match.Any]);
    return [
        Trades.find({
          _id: tradeId
        })
    ];
});

Meteor.publish("open_trades", function() {
    check(arguments, [Match.Any]);
    return [
        Trades.find({
            $or : [ { buyerId: null }, { sellerId: null } ]
        })
    ];
});

Meteor.publish("trade_references", function(tradeId) {
    check(arguments, [Match.Any]);
    return [
        References.find({tradeId: tradeId})
    ];
});

Meteor.publishComposite("trade_potential_references", function(tradeId) {
    check(arguments, [Match.Any]);
    return {
        find: function() {
            return Trades.find({_id: tradeId});
        },
        children: [{
            find: function(trade) {
                return Peers.find({
                    objectId: { $in: [ trade.buyerId, trade.sellerId ] }
                });
            }
        }]
    };
});

Meteor.publish("user_trades", function(userId) {
    check(arguments, [Match.Any]);
    return [
        Trades.find({
            $or : [ { buyerId: userId }, { sellerId: userId } ]
        })
    ];
});

Meteor.publish("user_references", function(userId) {
    check(arguments, [Match.Any]);
    return [
        References.find({insurerId: userId})
    ];
});

Meteor.publish("user_peers", function(userId) {
    check(arguments, [Match.Any]);
    return [
        Peers.find({fromId: userId})
    ];
});
