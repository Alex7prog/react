import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { fetchTasksList, createTask, updateTask, deleteTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList,
      }),
    );
  };

  onCreate = text => {
    // 1. Create tasks object
    // 2. Post object to server
    // 3. Fetch tasks list from server
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusToggle = id => {
    // 1. Find task in state by id
    // 2. Create updated task
    // 3. Update task on server
    // 4. Fetch updated tasks list

    const { done, text } = this.state.tasks.find(task => task.id === id);

    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusToggle}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
