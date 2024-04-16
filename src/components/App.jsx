import './App.module.css';
import ContactForm from './ContactForm/ContactForm.jsx';
import FilterContact from './FilterContact/FilterContact.jsx';
import ContactList from './ContactList/ContactList.jsx';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContact />
      <ContactList />
    </div>
  );
};

export { App };
