import { createContext, useContext, useState } from "react";
import { tasks } from "../data/tasksData";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskList] = useState(tasks);

  return (
    <TaskContext.Provider value={{ taskList }}>{children}</TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
