import React, { Component } from 'react';
import shortid from 'shortid';
import TodoList from 'components/TodoList';
import TodoEditor from 'components/TodoEditor';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: true },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  onToggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodo = () => {
    const { todos, filter } = this.state;

    const toNormalazedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(toNormalazedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;

    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodoCount = this.getCompletedTodoCount();
    const filteredTodos = this.getVisibleTodo();

    return (
      <>
        <div>
          <p>Общее кол-во:{todos.length} </p>
          <p>Кол-во выполненных:{completedTodoCount} </p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
      </>
    );
  }
}
export default App;
