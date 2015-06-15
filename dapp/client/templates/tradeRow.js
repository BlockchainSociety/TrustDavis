Template.tradeRow.events({
    "click #btn-cancel-trade": function (event) {
        console.log("cancel trade", this._id);
        Meteor.call("cancelTrade", this._id);
    }
});
