Helpers = {};

"use strict";

Helpers.tradeValidUntil = function() {
    return moment().add(TRADE_VALID_DAYS, 'days').endOf('day').format("YYYY-MM-DD");
};
