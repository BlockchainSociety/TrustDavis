"use strict";

AutoForm.addHooks(['newPeerForm'], {
    before: {
        method: function(doc) {
            doc.fromId = Meteor.connection.userId();
            Peers.simpleSchema().clean(doc);
            console.log("Peers doc with auto values", doc);
            this.result(doc);
        }
    },
    after: {
        method: function(error, result) {
            if (error) {
                console.log("Insert Error:", error);
            } else {
                console.log("Insert Result:", result);
            }
        }
    }
});

Template.newPeerForm.helpers({
    newPeerFormSchema: function() {
        return Peers.simpleSchema();
    }
});
