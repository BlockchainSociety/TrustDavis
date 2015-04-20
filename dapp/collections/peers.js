Peers = new Mongo.Collection("peers");

Peers.attachSchema(
  new SimpleSchema({
    fromId: {
      type: String,
      label: "From User Id"
    },
    objectId: {
      type: String,
      label: "Object User Id"
    },
    lockedLiability: {
      type: Number,
      label: "Locked Liability",
      min: 0,
      defaultValue: 0
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
