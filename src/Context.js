import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [toDoList, setTodoList] = useState([]);

  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();
  const isUser = isAuthenticated && user;
  const handleSubmit = () => {
    if (isUser) {
      if (!task) {
        console.log("empty field");
      } else if (task && isEditing) {
        const newTask = toDoList.map((item) => {
          if (item.id === editId) {
            return { ...item, value: task };
          }
          return item;
        });
        setTodoList(newTask);
        localStorage.setItem("taskList", JSON.stringify(newTask));
        setOpen(false);
      } else {
        addTask(task);
        setTask("");
        setOpen(false);
      }
    }
  };
  const addTask = (task) => {
    const newItem = { id: new Date().getTime().toString(), value: task };
    const newList = [...toDoList, newItem];
    localStorage.setItem("taskList", JSON.stringify(newList));
    setTodoList(newList);
  };
  const deleteTask = (id) => {
    if (isUser) {
      const newList = toDoList.filter((task) => task.id !== id);
      localStorage.setItem("taskList", JSON.stringify(newList));
      setTodoList(newList);
    }
  };
  const editTask = (id) => {
    if (isUser) {
      setOpen(true);
      const task = toDoList.find((task) => task.id === id);
      setTask(task.value);
      setEditId(id);
      setIsEditing(true);
    }
  };

  //BackDrop
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (isUser) {
      setOpen(!open);
    }
  };
  const handleClose = () => {
    if (isUser) {
      if (isEditing) {
        setIsEditing(false);
        setTask("");
      }

      setOpen(false);
    }
  };
  useEffect(() => {
    const taskList = localStorage.getItem("taskList");
    if (taskList) {
      setTodoList(JSON.parse(taskList));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        toDoList,
        addTask,
        deleteTask,
        handleSubmit,
        editTask,
        isEditing,
        task,
        setTask,
        handleClose,
        handleToggle,
        open,
        isUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
