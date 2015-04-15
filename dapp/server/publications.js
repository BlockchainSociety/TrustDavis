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


Meteor.publish("contacts", function() {
    return [
        Contacts.find()
    ]
});

Meteor.publish("contacts", function(contactId) {
    check(arguments, [Match.Any]);
    return [
        Contacts.find({
          _id: contactId
        })
    ];
});
