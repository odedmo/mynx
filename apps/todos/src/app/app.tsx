import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
// import NxWelcome from './nx-welcome';

interface Todo {
  title: string;
}

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
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </StyledApp>
  );
}

export default App;
