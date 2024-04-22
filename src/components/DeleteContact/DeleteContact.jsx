import css from './DeleteContact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactSlice';

const DeleteContact = props => {
  const dispatch = useDispatch();
  const { contactName } = props;

  const handleClickDeleteButton = e => {
    const payload = e.target.name.toLowerCase();
    dispatch(deleteContacts(payload));
  };

  return (
    <button
      className={css.deleteButton}
      name={contactName}
      onClick={handleClickDeleteButton}
    >
      Delete
    </button>
  );
};

export default DeleteContact;
