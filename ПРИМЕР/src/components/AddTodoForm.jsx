import { useState } from "react";

export function AddTodoForm({ setTodos, todos }) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodoClick = () => {
    if (!newTodoText) {
      return;
    }

    setTodos([...todos, { text: newTodoText, id: Date.now() }]);

    setNewTodoText("");
  };

  return (
    <div>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <button onClick={handleAddTodoClick}>Добавить задачу</button>
    </div>
  );
}
