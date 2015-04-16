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
