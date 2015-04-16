Template.referenceRow.events({
    "click .delete": function (event) {
        console.log("deleting reference", this._id);
        Meteor.call("deleteReference", this._id);
    }
});
