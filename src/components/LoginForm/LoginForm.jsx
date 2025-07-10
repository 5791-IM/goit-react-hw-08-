import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Невірний email").required("Email обовʼязковий"),
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    .required("Пароль обовʼязковий"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
