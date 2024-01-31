import { Todo } from "../App";
import { TodoItem } from "./TodoItem";

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No todos</li>}
      {todos.map((todo) => {
        return <TodoItem todo={todo} setTodos={setTodos} />;
      })}
    </ul>
  );
}
