Meteor.publish("trade", function(tradeId) {
    check(arguments, [Match.Any]);
    return [
        Trades.find({
          _id: tradeId
        })
    ];
});

Meteor.publish("my_contacts", function() {
    check(arguments, [Match.Any]);
    return [
        Contacts.find()
    ];
});

Meteor.publish("all_users", function() {
    check(arguments, [Match.Any]);
    return [
        Users.find()
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

Meteor.publish("open_trades", function() {
    check(arguments, [Match.Any]);
    return [
        Trades.find({
            $or : [ { buyerId: null }, { sellerId: null } ]
        })
    ];
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
