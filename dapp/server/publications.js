Meteor.publish("my_trades", function() {
    // TODO check that userId is defined and limit to user specific trades
    return [
        Trades.find()
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

Meteor.publish("my_references", function() {
    // TODO check that userId is defined and limit to user specific references
    return [
        References.find()
    ];
});

Meteor.publish("my_contacts", function() {
    check(arguments, [Match.Any]);
    return [
        Contacts.find()
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