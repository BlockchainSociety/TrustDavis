Template.referenceRow.events({
    "click .delete": function (event) {
        console.log("deleting reference", this._id);
        Meteor.call("deleteReference", this._id);
    },
    "switchChange.bootstrapSwitch .switch": function (event) {
        console.log("toggle reference", this._id, event);

        if ('trade' in Template.parentData(2) ) {
            var trade = Template.parentData(2).trade;

            if($(event.target).is(":checked")) {
                Meteor.call("newReferenceFromPeer", this._id, trade._id);
            } else {
                Meteor.call("deleteReference", this._id, trade._id);
            }
        }

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
        return _.isObject(reference);
    }
});

Template.referenceRow.onRendered(function() {
    this.$("[name='my-checkbox']").bootstrapSwitch();
});
