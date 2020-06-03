import React from 'react';
import { ITodo } from '../interfaces';

interface TodoListProps {
  todos: ITodo[];
  toggleHandler(id: number): void;
  removeHandler: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleHandler,
  removeHandler,
}) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет</p>;
  }

  const removeHandlerPreventDefault = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    removeHandler(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleHandler(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icon red-text"
                onClick={(event) => removeHandlerPreventDefault(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
