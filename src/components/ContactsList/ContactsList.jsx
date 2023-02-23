import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { Ul } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const getFiltredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );}
  

const ContactsList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filtredContacts = getFiltredContacts(contacts, filter)

  if (filtredContacts.length > 0) {
    return (
      <Ul>
        {filtredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
          />
        ))}
      </Ul>
    )
  }
};


export default ContactsList;
