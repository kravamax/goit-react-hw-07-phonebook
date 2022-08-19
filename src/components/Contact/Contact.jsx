import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import toast from 'react-hot-toast';

import { useDeleteContactMutation } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const onDelete = id => {
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
