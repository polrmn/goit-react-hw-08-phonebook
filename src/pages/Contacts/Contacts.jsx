import AddNewContact from 'components/AddNewContact/AddNewContact';
import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es';
import { getContactsThunk } from 'redux/contacts/contactsOperations';
import { getError, getIsLoading } from 'redux/selectors';
import { Title } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <AddNewContact />
      <Title>Contacts</Title>
      <FilterContacts />
      {isLoading && !error ? <b>Request in progress...</b> : <ContactsList />}
    </>
  );
};

export default Contacts;
