import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsOperations';
import { ButtonDelete, Li } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <Li key={id}>
      {name}: {number}
      <ButtonDelete onClick={handleBtnClick} type="button">
        Delete
      </ButtonDelete>
    </Li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
