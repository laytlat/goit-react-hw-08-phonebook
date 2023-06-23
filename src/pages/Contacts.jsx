import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { StyledContactsContainer } from './stylesForPages/Contacts.styled';

export default function Contacts() {
  return (
    <StyledContactsContainer>
      <div>
        <Filter />
        <ContactList />
      </div>
      <ContactForm />
    </StyledContactsContainer>
  );
}
