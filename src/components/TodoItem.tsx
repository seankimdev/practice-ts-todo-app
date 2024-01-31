import { Todo } from "../App";

export function TodoItem({
  todo,
  setTodos,
}: {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };
  const toggleTodo = (id: string, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
