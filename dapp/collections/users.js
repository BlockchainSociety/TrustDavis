Users = new Mongo.Collection("users");

Users.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      label: "User Name"
    },
    deposit: {
      type: Number,
      label: 'Deposit',
      min: 0,
      defaultValue: 0
    }
  })
);

Users.helpers({
    isMyself: function() {
        return this._id === Meteor.connection.userId();
    },
    isPeer: function() {
        var peer = Peers.findOne({fromId: Meteor.connection.userId(), objectId: this._id});
        return _.isObject(peer);
    }
});
