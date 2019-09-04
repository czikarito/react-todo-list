import React from 'react';

import TodoForm from '../../components/Todo/TodoForm';

const ScreensTodoForm = ({ match: { params } }) => {
  return <TodoForm id={params.id} />;
};

export default ScreensTodoForm;
