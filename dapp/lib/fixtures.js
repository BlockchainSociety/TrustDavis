Fixtures = {
    user: {
        id: "1a73636d",
        name: "Mike",
        deposit: 12
    },
    trades: [
        {
            _id: "kGErvKsgiLSNDffh6",
            type: 'buy',
            description: 'Garden gnome',
            price: 12,
            buyerId: '1a73636d',
            sellerId: '91c24063',
            status: 'new',
            expiration: '2014-12-31',
            escrowPct: 100.0,
            insurancePct: 50.0,
            references: [{
                id: 'f7009765',
                insurerId: 'f7009765',
                liability: 6,
                premiumPct: 10.0
            }]
        },
        {
            _id: 'SLsL9iQs6cgujmQEz',
            type: 'sell',
            description: 'Lawnmower',
            price: 66,
            sellerId: '1a73636d',
            status: 'new',
            expiration: '2014-10-15',
            escrowPct: 100.0,
            insurancePct: 50.0,
            references: [{
                id: 'f7009765',
                insurerId: 'f7009765',
                liability: 6,
                premiumPct: 10.0
            }]
        },
        {
            _id: 'GFaGCaaNKPCbaF2vw',
            type: 'sell',
            description: 'Monkey',
            price: 42,
            sellerId: '1a73636d',
            status: 'cancelled',
            expiration: '2014-10-15',
            escrowPct: 100.0,
            insurancePct: 50.0,
            references: [{
                id: 'f7009765',
                insurerId: 'f7009765',
                liability: 6,
                premiumPct: 10.0
            }]
        }
    ],
    references: [
        {
            id: 'f7009765',
            traderId: '91c24063',
            maxLiability: 12,
            premiumPct: 10,
            lockedLiability: 6
        },
        {
            id: '812d3340',
            traderId: '12345678',
            maxLiability: 0,
            premiumPct: 0,
            lockedLiability: 0
        }
    ],
    contacts: {
        '91c24063': {
            id: '91c24063',
            name: 'Andrew'
        },
        'f7009765': {
            id: 'f7009765',
            name: 'John'
        }
    }
};
