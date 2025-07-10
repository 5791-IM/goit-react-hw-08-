import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Імʼя закоротке")
    .max(50, "Імʼя задовге")
    .required("Імʼя обовʼязкове"),
  email: Yup.string().email("Невірний email").required("Email обовʼязковий"),
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    .required("Пароль обовʼязковий"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(data => console.log(data))
      .catch(error => console.log(error));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
