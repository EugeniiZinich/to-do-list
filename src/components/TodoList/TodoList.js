import React from 'react';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>DELETE</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
