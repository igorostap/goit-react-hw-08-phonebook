import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { InputForm } from '../InputForm/InputForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactLList/ContactList';
import authSelectors from 'Redux/auth/auth-selectors';
import { PhonebookBox } from './Phonebook.styled';

// others

export function Phonebook() {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {!isLogged ? (
        <Navigate to="/login" />
      ) : (
        <PhonebookBox>
          <h1>Phonebook</h1>
          <InputForm />

          <Filter />
          <ContactList />
        </PhonebookBox>
      )}
    </>
  );
}
