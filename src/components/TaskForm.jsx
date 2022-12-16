import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    createTask({ title, descripcion });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handlesubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-3xl font-bold text-white mb-3">Crear Tarea</h1>
        <input
          placeholder="Escriba su tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="descripcion tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white"> Guardar </button>
      </form>
    </div>
  );
}

export default TaskForm;
