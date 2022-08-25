import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'Redux/ContactsSlice';
export function ContactList() {
  const { data } = useGetContactsQuery();

  const contacts = data ?? [];

  const contactsFilter = useSelector(store => store.filter.filter);
  const normalizedFilter = contactsFilter.toLowerCase();
  const filteredContacts = contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    .reverse();

  return (
    <>
      <>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </>
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
/* */
