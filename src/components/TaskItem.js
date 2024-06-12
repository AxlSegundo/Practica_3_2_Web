import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;
