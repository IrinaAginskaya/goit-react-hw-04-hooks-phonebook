import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, removeContact }) => (
  <List>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <button type="button" name="delete" onClick={() => removeContact(contact.id)}>
            DELETE
          </button>
        }
      </li>
    ))}
  </List>
);

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
