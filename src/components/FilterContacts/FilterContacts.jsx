import { nanoid } from 'nanoid';
import { Input, Label } from './FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filterSlice';

const FilterContacts = () => {
  const filterInputId = nanoid();
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const hadleInputChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label htmlFor={filterInputId}>Find contacts by name</Label>
      <Input
        onChange={hadleInputChange}
        value={filter}
        id={filterInputId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

export default FilterContacts;
