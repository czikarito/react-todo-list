import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

export const UserList = () => (
  <div>
    <h1>User list</h1>
    <Formik
      initialValues={{ users: ['Pawel', 'John', 'Tom', 'Kacper'] }}
      onSubmit={values => {
        alert(JSON.stringify(values));
      }}
      render={({ values }) => (
        <Form>
          <FieldArray
            name='users'
            render={arrayHelpers => (
              <div>
                {values.users && values.users.length > 0 ? (
                  values.users.map((_, index) => (
                    <div key={index}>
                      <Field name={`users.${index}`} />
                      <button
                        type='button'
                        onClick={() => arrayHelpers.remove(index)}>
                        Remove
                      </button>
                      <button
                        type='button'
                        onClick={() => arrayHelpers.insert(index, '')}>
                        Add
                      </button>
                    </div>
                  ))
                ) : (
                  <button type='button' onClick={() => arrayHelpers.push('')}>
                    Add new user
                  </button>
                )}
                <div>
                  <button type='submit'>Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);
