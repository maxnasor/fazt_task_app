import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task, deleteTask }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-300">{task.description}</p>
      <button className="bg-red-400 px-2 py-1 rounded-md mt-4" onClick={deleteTask}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
