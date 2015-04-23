"use strict";

AutoForm.addHooks(['depositFundsForm'], {
    before: {
        method: function(user) {
            Users.simpleSchema().clean(user);
            this.result(user);
        }
    },
    after: {
        method: function(error, result) {
            if (error) {
                console.log("Update Error:", error);
            } else {
                console.log("Update Result:", result);
            }
            Modal.hide("depositFundsModal");
        }
    }
});

Template.depositFundsModal.helpers({
    depositFormSchema: function() {
        return Users.simpleSchema();
    }
});


Template.depositFundsModal.events({
    'click #close': function(event, template) {
        event.preventDefault();
        Modal.hide("depositFundsModal");
    }
})