Fixtures = {
    users: [
        {
            _id : '74GDdWHJ3JotoRgLy',
            name: 'Bob', // Buyer
            deposit: 0
        },
        {
            _id: 'qmxstpBMSrHwf5N7g',
            name: 'Sally', // Seller
            deposit: 0
        },
        {
            _id: 'PZWmf9YMJp3XsMjd5',
            name: 'Kent', // v1
            deposit: 150
        },
        {
            _id: 'DLKZZeSJEBFQKLNGT',
            name: 'Lex', // v2
            deposit: 50
        },
        {
            _id: 'GhpmzJz9aodzkbWaR',
            name: 'Mike', // v3
            deposit: 150
        }
    ],
    trades: [
        {
            _id: 'kGErvKsgiLSNDffh6',
            type: 'sell',
            description: 'Garden gnome',
            price: 150,
            buyerId: '74GDdWHJ3JotoRgLy', // Bob
            sellerId: 'qmxstpBMSrHwf5N7g', // Sally
            status: 'insured',
            expiration: '2015-06-15',
            buyerInsurancePct: 100.0,
            sellerInsurancePct: 100.0
        },
        {
            _id: 'SLsL9iQs6cgujmQEz',
            type: 'buy',
            description: 'Lawnmower',
            price: 66,
            buyerId: '74GDdWHJ3JotoRgLy', // Bob
            status: 'new',
            expiration: '2014-10-15',
            escrowPct: 100.0,
            insurancePct: 50.0
        },
        {
            _id: 'GFaGCaaNKPCbaF2vw',
            type: 'sell',
            description: 'Monkey',
            price: 42,
            sellerId: 'qmxstpBMSrHwf5N7g', // Sally
            status: 'cancelled',
            expiration: '2014-10-15',
            escrowPct: 100.0,
            insurancePct: 50.0
        }
    ],
    references: [
        {
            _id: 'iPDyEpW3iro254vpj',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            traderId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            againstId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            amount: 100,
            premiumPct: 5
        },
        {
            _id: 'M5zW87MjWCtBiGRvL',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            traderId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            againstId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            amount: 50,
            premiumPct: 1
        },
        {
            _id: 'bcoLELMoA3oHdKLXd',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            traderId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            fromId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            againstId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            amount: 50,
            premiumPct: 8
        },
        {
            _id: 'NXog25NXRq74EMMLx',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            traderId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            fromId: 'GhpmzJz9aodzkbWaR', // Mike / v3
            againstId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            amount: 150,
            premiumPct: 5
        }
    ],
    peers: [
        {
            _id: 'KSAnCFRmh9BAdsZpB',
            fromId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            toId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            lockedLiability: 0,
            maxLiability: 0,
            premiumPct: 0
        },
        {
            _id: 'p3SEPCJcQk62gQmwK',
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            toId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            lockedLiability: 150,
            maxLiability: 150,
            premiumPct: 0
        },
        {
            _id: 'itcGwbhTW7QFs78nk',
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            toId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            lockedLiability: 100,
            maxLiability: 100,
            premiumPct: 5
        },
        {
            _id: 'y72HWQgztkha8Mx4S',
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            toId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            lockedLiability: 50,
            maxLiability: 50,
            premiumPct: 1
        },
        {
            _id: 'vsmETMKbD8fyCHMPX',
            fromId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            toId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            lockedLiability: 50,
            maxLiability: 50,
            premiumPct: 8
        },
        {
            _id: 'HbqC6FRF7hnCgxEWt',
            fromId: 'qmxstpBMSrHwf5N7g', // Sally / seller,
            toId: 'GhpmzJz9aodzkbWaR', // Mike / v3
            lockedLiability: 0,
            maxLiability: 0,
            premiumPct: 0
        },
        {
            _id: 'vjCq7s8K64YyvxKT7',
            fromId: 'GhpmzJz9aodzkbWaR', // Mike / v3,
            toId: 'qmxstpBMSrHwf5N7g', // Sally / seller,
            lockedLiability: 150,
            maxLiability: 150,
            premiumPct: 5
        },
        {
            _id: 'NzKi9Trb4FWyw7kaM',
            fromId: 'GhpmzJz9aodzkbWaR', // Mike / v3,
            toId: '74GDdWHJ3JotoRgLy', // Bob / buyer,
            lockedLiability: 150,
            maxLiability: 150,
            premiumPct: 5
        },
    ]
};
