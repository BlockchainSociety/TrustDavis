Template.tradeDetails.events({
    "click #btn-cancel": function (event) {
        console.log("cancel trade", this.trade._id);
        Meteor.call("cancelTrade", this.trade._id);
    }
});
