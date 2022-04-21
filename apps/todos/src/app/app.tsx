import styled from '@emotion/styled';
import { useState } from 'react';
// import NxWelcome from './nx-welcome';

interface Todo {
  title: string;
}

const StyledApp = styled.div`
  // Your style here
`;

export function App() {

  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      },
    ]);
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
