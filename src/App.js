import { useState, useEffect } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

// массив контактов для разработки, после сдачи заменить на пустой массив
const contactsАForDevelopment = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? contactsАForDevelopment
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (contacts.some(contact => contact.name.includes(data.name))) {
      return alert(`${data.name} is already in contacts!`);
    }

    setContacts([...contacts, data]);
  };

  const deleteContact = currentId => {
    setContacts([...contacts.filter(contact => contact.id !== currentId)]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLocaleLowerCase());
  };

  const turnOnFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter),
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={changeFilter} />
        {filter === '' ? (
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        ) : (
          <ContactList
            contacts={turnOnFilter()}
            deleteContact={deleteContact}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
