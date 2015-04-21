"use strict";

AutoForm.addHooks(['newUserForm'], {
    before: {
        method: function(doc) {
            Users.simpleSchema().clean(doc);
            console.log("Users doc with auto values", doc);
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

Template.newUserForm.helpers({
    newUserFormSchema: function() {
        return Users.simpleSchema();
    }
});
