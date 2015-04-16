// Fake login mechanism. Will be replaced by Ethereum.JS

Meteor.methods({
    fakelogin: function(userId) {
        check(userId, String);
        this.setUserId(userId);


        // TODO: Probably a better way to do this.
        if( Users.find({ _id: userId }).fetch() == false ) {
            console.log('inserting login user fixture', userId);
            Users.insert({
                _id : userId,
                name: 'Bob',
                deposit: 50
            });
        }
    }
});
