import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';

const TodoFormSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, 'too long')
    .required('required'),
  author: Yup.string()
    .max(10, 'too long')
    .required('required')
});

const TodoForm = props => {
  return (
    <div>
      <Formik
        initialValues={props.initialValues}
        validationSchema={TodoFormSchema}
        onSubmit={(values, { resetForm }) => {
          props.onSave(values);
          resetForm();
          props.history.push('/');
        }}>
        {({ errors, touched }) => (
          <Form>
            <Field placeholder='Todo title' name='title' />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field placeholder='author' name='author' />
            {errors.author && touched.author ? (
              <div>{errors.author}</div>
            ) : null}
            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

TodoForm.defaultProps = {
  initialValues: {
    title: '',
    author: ''
  }
};

export default withRouter(TodoForm);
