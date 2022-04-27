import styled from '@emotion/styled';
import { Todo } from '@mynx/data';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

const StyledTodos = styled.div`
  color: pink;
`;

export function Todos(props: TodosProps) {
  return (
    <StyledTodos>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </StyledTodos>
  );
}

export default Todos;
