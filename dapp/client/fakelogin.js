// Fake login mechanism. Will be replaced by Ethereum.JS

Tracker.autorun(function() {
    var userId = Meteor.connection.userId();
    if (!userId) {
        userId = localStorage.getItem(TRUSTDAVIS_UID) || undefined;
        if (!userId) {
            userId = Random.id();
            localStorage.setItem(TRUSTDAVIS_UID, userId);
        }

        Meteor.call('fakelogin', userId, function(err) {
            if (!err) {
                Meteor.connection.setUserId(userId);
            }
        });
    }
});
