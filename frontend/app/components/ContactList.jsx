/** @jsx React.DOM */

var React = require("react");
var Fluxxor = require("fluxxor");
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var _ = require('lodash');

var ActionDropDown = require("./ActionDropDown");
var UserLink = require("./UserLink");

var ContactRow = React.createClass({
    mixins: [FluxChildMixin],
    render: function() {
        return (
            <tr>
                <td><UserLink users={this.props.users} id={this.props.contact.id} /></td>
                <td><ActionDropDown key={this.props.contact.id}
                        handleDelete={this.handleDelete} /></td>
            </tr>
        );
    },
    handleDelete: function(e) {
        e.preventDefault();
        this.getFlux().actions.contact.removeContact(this.props.contact);
    }
});

var ContactList = React.createClass({
    render: function() {
        var contactListNodes = _.sortBy(this.props.contactList, 'name')
                                .map(function (contact) {
            return (
                <ContactRow key={contact.id} contact={contact} users={this.props.users} />
            );
        }.bind(this));
        return (
            <table className="contactList table table-striped">
                <thead>
                    <tr>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contactListNodes}
                </tbody>
            </table>
        );
    }
});

module.exports = ContactList;
