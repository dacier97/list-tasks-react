import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  const createTask = (task) => {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  };

  function deleteTask(taskId) {
    setTask(tasks.filter((tasks) => tasks.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks: tasks, deleteTask: deleteTask, createTask: createTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
