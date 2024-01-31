import { useState } from "react";

interface NewTodoFormProps {
  addTodo: (title: string) => void;
}

export function NewTodoForm({ addTodo }: NewTodoFormProps) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
