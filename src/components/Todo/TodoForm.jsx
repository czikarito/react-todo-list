import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoFormSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, "too long")
    .required("required"),
  author: Yup.string()
  .max(10, "too long")
  .required("required"),
})

const TodoForm = ({ onSave, initialValues }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={TodoFormSchema}
        onSubmit={(values, { resetForm }) => {
          onSave(values);
          resetForm();
        }}
      >

      {({ errors, touched }) => (
        <Form>
          <Field placeholder="Todo title" name="title" />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
          <Field placeholder="author" name="author" />
          {errors.author && touched.author ? <div>{errors.author}</div> : null}
          <button type="submit">Save</button>
        </Form>
      )}

    </Formik>
  </div>
  )
}

TodoForm.defaultProps = {
  initialValues: {
    title: "",
    author: ""
  }
}

export default TodoForm;
