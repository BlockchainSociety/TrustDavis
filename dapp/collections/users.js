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
