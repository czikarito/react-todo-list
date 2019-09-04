import React, { Component } from 'react'
import { addTodo } from '../../redux/actions/todoContainerActions';
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom'

const TodoFormSchema = Yup.object().shape({
  value: Yup.string()
    .max(50, "too long")
    .required("required"),
  author: Yup.string()
  .max(10, "too long")
  .required("required"),
})

class TodoForm extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            value: "",
            author: ""
          }}
          validationSchema={TodoFormSchema}
          onSubmit={(values, { resetForm }) => {
            this.props.addTodo(values);
            resetForm();
          }}
        >

        {({ errors, touched }) => (
          <Form>
            <Field placeholder="Todo value" name="value" />
            {errors.value && touched.value ? <div>{errors.value}</div> : null}
            <Field placeholder="author" name="author" />
            {errors.author && touched.author ? <div>{errors.author}</div> : null}
            <button type="submit">Add Todo</button>
          </Form>
        )}

        </Formik>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: data => {
      dispatch(addTodo(data));
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TodoForm));
