import { ListItem, TelNum, DelBtn } from './ContactList.styled';
import { useDeleteContactMutation } from '../../Redux/ContactsSlice';
import PropTypes from 'prop-types';

export function ContactItem({ contact }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ListItem>
      {contact.name}: <TelNum>{contact.number}</TelNum>
      <DelBtn type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  idx: PropTypes.number,
  onDelete: PropTypes.func,
};
