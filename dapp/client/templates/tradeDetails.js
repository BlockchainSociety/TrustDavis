Template.tradeDetails.events({
    "click #btn-accept": function (event) {
        console.log("accept trade", this.trade._id);
        Meteor.call("acceptTrade", this.trade._id);
    },
    "click #btn-cancel": function (event) {
        console.log("cancel trade", this.trade._id);
        Meteor.call("cancelTrade", this.trade._id);
    },
    "click #btn-show-trade-id": function (event) {
        Modal.show("tradeIdModal", {tradeId: this.trade._id});
    }
});
