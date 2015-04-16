Fixtures = {
    users: [
        {
            _id : '74GDdWHJ3JotoRgLy',
            // userId: '1a73636d',
            name: 'Mike',
            deposit: 12
        },
        {
            _id: 'qmxstpBMSrHwf5N7g',
            // userId: '91c24063',
            name: 'Andrew',
            deposit: 1
        },
        {
            _id: 'PZWmf9YMJp3XsMjd5',
            // userId: 'f7009765',
            name: 'John',
            deposit: 6
        }
    ],
    trades: [
        {
            _id: 'kGErvKsgiLSNDffh6',
            type: 'buy',
            description: 'Garden gnome',
            price: 12,
            buyerId: '74GDdWHJ3JotoRgLy', // Mike
            sellerId: 'qmxstpBMSrHwf5N7g', // Andrew
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
                id: 'f7009765', // ?? hmmm should just be _id to References ?
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
            _id: '7oZqjZuXMsR3cQoY6',
            traderId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            maxLiability: 12,
            premiumPct: 10,
            lockedLiability: 6
        },
        {
            _id: 'AeRB2zLHcNrBKZDpr',
            traderId: '12345678',
            maxLiability: 0,
            premiumPct: 0,
            lockedLiability: 0
        }
    ],
    // TODO : Just reference Users?
    contacts: [
        {
            _id: 'neRJwJrCsffMdWwLq',
            contactId: '91c24063',
            name: 'Andrew'
        },
        {
            _id: '2FP2G9emF5EJAmaDe',
            contactId: 'f7009765',
            name: 'John'
        }
    ]
};
