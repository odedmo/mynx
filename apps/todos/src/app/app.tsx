import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Todo } from '@mynx/data';
// import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <StyledApp>
      {/* <NxWelcome title="todos" /> */}
      <h1>Todos</h1>
      <ul>
        {todos.map((t, index) => (
          <li key={index} className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </StyledApp>
  );
}

export default App;
