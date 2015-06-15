Peers = new Mongo.Collection("peers");

Peers.attachSchema(
  new SimpleSchema({
    fromId: {
      type: String,
      label: "From User Id",
      denyUpdate: true
    },
    objectId: {
      type: String,
      label: "Object User Id",
      denyUpdate: true
    },
    lockedLiability: {
      type: Number,
      label: "Locked Liability",
      min: 0,
      defaultValue: 0,
      denyUpdate: true
    },
    maxLiability: {
      type: Number,
      label: "Maximum Liability",
      min: 0,
      defaultValue: 0
    },
    premiumPct: {
      type: Number,
      label: "Premium Percentage",
      min: 0,
      max: 100,
      defaultValue: 0
    }
  })
);

Peers.allow({
  'update': function () {
    return true;
  }
});