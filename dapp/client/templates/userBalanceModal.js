"use strict";

AutoForm.addHooks(['userBalanceModal'], {
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
            Modal.hide("userBalanceModal");
        }
    }
});

Template.userBalanceModal.helpers({
    balanceFormSchema: function() {
        return Users.simpleSchema();
    }
});


Template.userBalanceModal.events({
    'click #close': function(event, template) {
        event.preventDefault();
        Modal.hide("userBalanceModal");
    }
})