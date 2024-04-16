import css from './FilterContact.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactSlice';

const FilterContact = () => {
  const dispatch = useDispatch();

  const filterChange = e => {
    const inputFilter = document.querySelector('input[name="filter"]');
    dispatch(filterContacts(inputFilter.value));
  };

  return (
    <div className={css.filterContact}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        onChange={filterChange}
      />
    </div>
  );
};

export default FilterContact;
