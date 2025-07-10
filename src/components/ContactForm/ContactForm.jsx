import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, Button, Box } from "@mui/material";
import { nanoid } from "nanoid";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  // const nameFieldId = useId();
  // const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactShema}
    >
      {({ errors, touched }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} width={300}>
            <Field
              as={TextField}
              label="Имя"
              name="name"
              variant="outlined"
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
            />

            <Field
              as={TextField}
              label="Телефон"
              name="number"
              variant="outlined"
              error={touched.number && Boolean(errors.number)}
              helperText={<ErrorMessage name="number" />}
            />

            <Button type="submit" variant="contained" color="primary">
              Добавить контакт
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={ContactShema}
//     >
//       <Form className={css.form}>
//         <label className={css.label} htmlFor={nameFieldId}>
//           Name
//         </label>
//         <Field className={css.input} type="text" name="name" />
//         <ErrorMessage className={css.error} name="name" component="span" />

//         <label className={css.label} htmlFor={numberFieldId}>
//           Number
//         </label>
//         <Field className={css.input} type="text" name="number" />
//         <ErrorMessage className={css.error} name="name" component="span" />

//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }
