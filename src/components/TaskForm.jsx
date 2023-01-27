import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  function clearForm() {
    setTitle("");
    setDescription("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    clearForm();
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          value={title}
          placeholder="Escribe tu tarea"
          onChange={(event) => setTitle(event.target.value)}
          autoFocus
          className="bg-slate-300 p-3 m-2 rounded-md"
        />
        <textarea
          value={description}
          placeholder="Escribe la descripción de la tarea"
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(event) => setDescription(event.target.value)}
          className="bg-slate-300 p-3 m-2 rounded-md"
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
