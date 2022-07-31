const baseUrl = 'https://62cde2d7066bd2b6992da5e6.mockapi.io/api/v1/todo_list';

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(tasksList => tasksList);
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      // 'Content=Type': 'application/json;utc-8',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      // 'Content=Type': 'application/json;utc-8',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
};
