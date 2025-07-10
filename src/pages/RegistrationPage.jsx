import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import css from "./HomePage/HomePage.module.css";

export default function RegistrationPage() {
  return (
    <>
      <h1 className={css.title}>Register your account</h1>
      <RegistrationForm />
    </>
  );
}
