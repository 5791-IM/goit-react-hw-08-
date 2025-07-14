import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, Button, Box } from "@mui/material";
import { nanoid } from "nanoid";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
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

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully");
        actions.resetForm();
      })
      .catch(error => {
        toast.error(`Failed to add contact:${error}`);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} width={300}>
            <Field
              as={TextField}
              label="Name"
              name="name"
              variant="outlined"
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
            />

            <Field
              as={TextField}
              label="Phone"
              name="number"
              variant="outlined"
              error={touched.number && Boolean(errors.number)}
              helperText={<ErrorMessage name="number" />}
            />

            <Button type="submit" variant="contained" color="primary">
              Add contact
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
