// Fake login mechanism. Will be replaced by Ethereum.JS

Meteor.methods({
    fakelogin: function(userId) {
        check(userId, String);
        this.setUserId(userId);
    }
});
