import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Section } from './Section/Section.jsx';

export const App = () => {
  // const newContactState = newContact => {
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  // const getFilteredData = () => {
  //   if (filter) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }
  //   return contacts;
  // };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <ContactList>
          <Filter />
        </ContactList>
      </Section>
    </div>
  );
};
