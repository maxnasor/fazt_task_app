import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks , deleteTask} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No Tasks yet</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
