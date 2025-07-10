import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectNameFilter,
} from "../../redux/filters/selectors.js";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact key={contact.id} contact={contact} filter={filter} />
        </li>
      ))}
    </ul>
  );
}
