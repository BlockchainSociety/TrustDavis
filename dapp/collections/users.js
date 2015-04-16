Users = new Mongo.Collection("users");

Users.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      label: "User Alias"
    },
    deposit: {
      type: Number,
      label: 'Deposit',
      min: 0
    }
  })
);

Users.allow({
  insert: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return !_.contains(fieldNames, 'status') && userId && doc && userId === doc.userId;
  },
  remove: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  fetch: ['userId']
});

