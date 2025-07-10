import LoginForm from "../components/LoginForm/LoginForm";
import css from "./HomePage/HomePage.module.css";

export default function LoginPage() {
  return (
    <>
      <h1 className={css.title}>Please log in</h1>
      <LoginForm />
    </>
  );
}
