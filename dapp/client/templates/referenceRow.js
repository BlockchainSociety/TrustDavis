Template.referenceRow.events({
    "click .delete": function (event) {
        console.log("deleting reference", this._id);
        Meteor.call("deleteReference", this._id);
    },
    "switchChange.bootstrapSwitch .switch": function (event) {
        console.log("toggle reference", this._id, event);

    }
});

Template.referenceRow.helpers({
    amount: function() {
        if (this.amount) {
            return this.amount;
        } else {
            return this.maxLiability;
        }
    },
    isActive: function() {
        var reference = References.findOne({peerId: this._id});
        console.log(this._id, reference);
        return _.isObject(reference);
    }
});

Template.referenceRow.onRendered(function() {
    this.$("[name='my-checkbox']").bootstrapSwitch();
});
