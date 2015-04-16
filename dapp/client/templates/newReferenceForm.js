"use strict";

AutoForm.addHooks(['newReferenceForm'], {
    before: {
        method: function(doc) {
            doc.insurerId = Meteor.connection.userId();
            References.simpleSchema().clean(doc);
            console.log("References doc with auto values", doc);
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

Template.newReferenceForm.helpers({
    newReferenceFormSchema: function() {
        return References.simpleSchema();
    }
});
