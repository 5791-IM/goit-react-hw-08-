import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import ContactList from "../components/ContactList/ContactList";
import css from "./HomePage/HomePage.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Your contacts</h1>
      <ContactForm />
      <SearchBox />
      <div>{loading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
