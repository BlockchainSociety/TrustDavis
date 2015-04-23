Template.referenceRow.events({
    "click .delete": function (event) {
        console.log("deleting reference", this._id);
        Meteor.call("deleteReference", this._id);
    }
});

Template.referenceRow.helpers({
    amount: function() {
        if (this.amount) {
            return this.amount;
        } else {
            return this.maxLiability;
        }
    }
});
