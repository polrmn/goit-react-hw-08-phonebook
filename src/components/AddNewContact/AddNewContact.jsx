import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/selectors';
import { Form, Input, Button } from './AddNewContact.styled';

const AddNewContact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const alreadyInContacts = contacts.find(
      contact => contact.name === form.name.value
    );

    if (alreadyInContacts) {
      alert(`${alreadyInContacts.name} is already in contacts.`);
      form.reset();
      return;
    }
    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };
    dispatch(addContactThunk(newContact));
    form.reset();
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <Input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberInputId}>Number</label>
      <Input
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default AddNewContact;
