import DeleteContact from '../DeleteContact/DeleteContact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilters } from '../../redux/selectors.js';

const ContactList = () => {
  // const {deleteContacts } = props;
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const deleteContacts = contactName => {
  //   const storedContacts = localStorage.getItem('contactList');
  //   let contactsArray = [];

  //   if (storedContacts) {
  //     contactsArray = JSON.parse(storedContacts).contacts;
  //   }

  //   let deleteContactsArray = contactsArray.filter(
  //     element => element.name.toLowerCase() !== contactName.toLowerCase()
  //   );

  //   localStorage.setItem(
  //     'contactList',
  //     JSON.stringify({ contacts: deleteContactsArray })
  //   );
  //   console.log(3, 'eliminacion de localstorage');

  //   setContacts({ contacts: deleteContactsArray });
  // };

  return (
    <section>
      <div>
        <ul>
          {filterContacts.map(element => (
            <li key={element.id}>
              {element.name}: {element.number}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className={css.listDeleteContact}>
          {filterContacts.map(element => (
            <li key={element.id}>
              <DeleteContact
                contactName={element.name}
                // deleteContacts={deleteContacts}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactList;
