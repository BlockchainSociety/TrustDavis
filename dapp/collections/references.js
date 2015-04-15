References = new Mongo.Collection("references");

References.attachSchema(
  new SimpleSchema({
    traderId: {
      type: String,
      label: "Trader User Id"
    },
    lockedLiability: {
      type: Number,
      label: "Locked Liability",
      min: 0
    },
    maxLiability: {
      type: Number,
      label: "Maximum Liability",
      min: 0
    },
    premiumPct: {
      type: Number,
      label: "Premium Percentage",
      min: 0,
      max: 100
    }
  })
);

References.allow({
  insert: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return userId && doc && userId === doc.userId;
  },
  remove: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  fetch: ['userId']
});

