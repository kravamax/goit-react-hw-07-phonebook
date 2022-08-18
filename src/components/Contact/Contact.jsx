import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
// import contactsActions from 'redux/contacts/contacts-actions';
// import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { useDeleteContactMutation } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  // const dispatch = useDispatch();

  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const onDelete = id => {
    // dispatch(contactsActions.deleteContact(id));
    deleteContact(id);
    toast.success(`${name} was deleted.`);
    return;
  };

  return (
    <li className={s.contact}>
      <p className={s.text}>
        <b>{name}:</b> {number}
      </p>
      <button
        className={s.button}
        type="button"
        onClick={() => onDelete(id)}
        disabled={isLoading}
      ></button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
