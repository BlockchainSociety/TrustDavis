Network = {
    nodes: new vis.DataSet(),
    edges: new vis.DataSet(),
    network: null,

    EDGE_LENGTH: 64
};

"use strict";

Network.options = {
    stabilize: true,
    nodes: {
        shape: 'dot',
        radius: 24,
        fontSize: 18
    },
    edges: {
        style: 'arrow',
        width: 2
    }
};

Template.network.onRendered(function() {
    Network.init(this.$('.network').get(0));

    // TODO make dynamic
    this.data.users.forEach(function(user) {
        Network.nodes.add({
            id: user._id,
            label: user.name
        });
    });

    // TODO make dynamic
    this.data.peers.forEach(function(peer) {
        Network.edges.add({
            id: peer._id,
            from: peer.fromId,
            to: peer.objectId,
            label: peer.maxLiability,
            length: Network.EDGE_LENGTH
        });
    });
});

Network.init = function(container) {
    Network.nodes.clear();
    Network.edges.clear();

    var data = {
        nodes: Network.nodes,
        edges: Network.edges
    };

    Network.network = new vis.Network(container, data, Network.options);

    Network.network.on('click', function (properties) {
        if (properties.nodes.length === 1) {
            var userId = properties.nodes[0];
            Router.go('userDetails', {userId: userId});
        }
    });
};
