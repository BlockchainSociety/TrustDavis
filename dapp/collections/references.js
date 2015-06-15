References = new Mongo.Collection("references");

References.attachSchema(
  new SimpleSchema({
    tradeId: {
      type: String,
      label: "Trade Id"
    },
    peerId: {
      type: String,
      label: "Peer Id"
    },
    // traderId: {
    //   type: String,
    //   label: "Trader User Id"
    // },
    // fromId: {
    //   type: String,
    //   label: "From User Id"
    // },
    objectId: {
      type: String,
      label: "Object User Id"
    },
    amount: {
      type: Number,
      label: "Amount Insured",
      min: 0,
      defaultValue: 0
    },
    premiumPct: {
      type: Number,
      label: "Premium Percentage",
      min: 0,
      max: 100
    }
  })
);
