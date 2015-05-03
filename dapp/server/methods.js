"use strict";

Meteor.methods({
    updateBalance: function (user) {
        check(user, Users.simpleSchema());

        var dbUser = Users.findOne({_id: this.userId });
        if (!dbUser) {
            throw new Meteor.Error(404, "User not found");
        }

        if ( dbUser.balance )

        Users.update({_id: dbUser._id }, { $inc: { balance: user.balance }});
    },
    newTrade: function(trade) {
        check(trade, Trades.simpleSchema());
        // TODO further validate
        var newTradeId = Trades.insert(trade);
        return {_id: newTradeId};
    },
    acceptTrade: function(tradeId) {
        check(tradeId, String);
        // TODO validate status and that the trade has no counterparty yet
        var trade = Trades.findOne({_id: tradeId});
        if (!trade) {
            throw new Meteor.Error(404, "Trade not found");
        }

        if (trade.buyerId == null) {
            Trades.update({_id: tradeId}, {$set: {buyerId: this.userId, status: 'accepted'}});
        } else if (trade.sellerId == null) {
            Trades.update({_id: tradeId}, {$set: {sellerId: this.userId, status: 'accepted'}});
        } else {
            throw new Meteor.Error(400, "Trade already has a counterparty");
        }

        return {_id: tradeId};
    },
    cancelTrade: function(tradeId) {
        check(tradeId, String);

        var trade, expired;

        trade = Trades.findOne({_id: tradeId});
        if (!trade) {
            throw new Meteor.Error(404, "Trade not found");
        }

        if(this.userId == trade.buyerId || this.userId == trade.sellerId) {
            expired = moment().isAfter(moment(trade.expiration));

            if( expired ) {
                Trades.update({_id: tradeId}, {$set: {status: 'expired'}});
            } else if ( !trade.buyerId || !trade.sellerId ) {
                Trades.update({_id: tradeId}, {$set: {status: 'cancelled'}});
            }
        }
        return {_id: tradeId};
    },
    newPeer: function(peer) {
        check(peer, Peers.simpleSchema());
        // TODO further validate
        var newPeerId = Peers.insert(peer);
        return {_id: newPeerId};
    },
    deletePeer: function(peerId) {
        check(peerId, String);
        // TODO validate status and that user is owner
        Peers.remove({_id: peerId});
        return {_id: peerId};
    },
    newUser: function(user) {
        check(user, Users.simpleSchema());
        // TODO further validate
        user._id = this.userId;
        var newUserId = Users.insert(user);
        return {_id: newUserId};
    },
    newReferenceFromPeer: function(peerId, tradeId) {
        console.log('new reference', peerId, tradeId);

        check(peerId, String);
        check(tradeId, String);

        var peer = Peers.findOne({_id: peerId});
        if (!peer) {
            throw new Meteor.Error(404, "Peer not found");
        }

        var trade = Trades.findOne({_id: tradeId});
        if (!trade) {
            throw new Meteor.Error(404, "Trade not found");
        }

        var reference = References.simpleSchema().clean({
            tradeId : trade._id,
            peerId: peer._id,
            // traderId:  , // ??
            // fromId: ??, // ??
            objectId: peer.objectId,
            amount: peer.maxLiability,
            premiumPct: peer.premiumPct
        });

        References.insert(reference);
    },
    deleteReference: function(peerId, tradeId) {
        console.log('delete reference', peerId, tradeId);

        check(peerId, String);
        check(tradeId, String);

        var peer = Peers.findOne({_id: peerId});
        if (!peer) {
            throw new Meteor.Error(404, "Peer not found");
        }

        var trade = Trades.findOne({_id: tradeId});
        if (!trade) {
            throw new Meteor.Error(404, "Trade not found");
        }

        var reference = References.findOne({
            tradeId: trade._id,
            peerId: peer._id,
            objectId: peer.objectId
        });

        if (!reference) {
            throw new Meteor.Error(404, "Reference not found");
        }

        References.remove(reference);
    }
});
