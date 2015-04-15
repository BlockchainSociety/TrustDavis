Trades = new Mongo.Collection("trades");

Trades.attachSchema(
  new SimpleSchema({
    type: {
      type: String,
      label: "Trade Type",
      allowedValues: TRADE_TYPES
    },
    description: {
      type: String,
      label: "Description",
      max: 32
    },
    price: {
      type: Number,
      label: "Price",
      min: 0
    },
    buyerId: {
      type: String,
      label: "Buyer User Id",
      optional: true
    },
    sellerId: {
      type: String,
      label: "Seller User Id",
      optional: true
    },
    status: {
      type: String,
      label: "Trade Status",
      allowedValues: TRADE_STATUSES,
      defaultValue: "new"
    },
    expiration: {
      type: Date,
    },
    escrowPct: {
      type: Number,
      label: "Escrow Percentage",
      min: 0,
      max: 100
    },
    insurancePct: {
      type: Number,
      label: "Insurance Percentage",
      min: 0,
      max: 100
    }
  })
);

Trades.allow({
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

