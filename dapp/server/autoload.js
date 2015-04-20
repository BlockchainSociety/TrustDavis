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

    if (!Peers.find().count()) {
        _.each(Fixtures.peers, function(peer) {
            console.log("inserting peer fixture", peer._id);
            Peers.insert(peer);
        });
    }

    if (!Users.find().count()) {
        _.each(Fixtures.users, function(user) {
            console.log("inserting user fixture", user._id);
            Users.insert(user);
        });
    }
});
