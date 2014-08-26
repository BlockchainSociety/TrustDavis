var keyMirror = require('react/lib/keyMirror');

module.exports = {
    CHANGE_EVENT: "change",
    contact: keyMirror({
        ADD_CONTACT: null,
        REMOVE_CONTACT: null
    }),
    trade: keyMirror({
        ADD_TRADE: null
    })
};
