Meteor.startup(function () {
    if (!Trades.find().count()) {
        _.each(Fixtures.trades, function(trade) {
            console.log("inserting trade fixture", trade._id);
            Trades.insert(trade);
        });
    }

    if (!References.find().count()) {
        _.each(Fixtures.references, function(reference) {
            console.log("inserting reference fixture", reference._id);
            References.insert(reference);
        });
    }

    if (!Contacts.find().count()) {
        _.each(Fixtures.contacts, function(contact) {
            console.log("inserting contact fixture", contact._id);
            Contacts.insert(contact);
        });
    }
});
