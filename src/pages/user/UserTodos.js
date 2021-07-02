import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserTodosTable from "./UserTodosTable";

const UserTodos = () => {
  let { id } = useParams();

  const [userTodos, setUserTodos] = useState(null);
  const [userTodosData, setUserTodosData] = useState(null);
  const [todosStatus, setTodoStatus] = useState("");

  const getTodos = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        if (todosStatus === "completed") {
          setUserTodos(json.filter((todo) => todo.completed));
        } else if (todosStatus === "notCompleted") {
          setUserTodos(json.filter((todo) => !todo.completed));
        } else if (todosStatus === "") {
          setUserTodos(json);
          setUserTodosData(json);
        }
      });
  };
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [id, todosStatus]);

  const buttonStyle = {
    display: "flex",
    justifyContent: "flex-end",
    margin: "20px",
  };

  const filterComplete = () => {
    const completed = userTodosData.filter((user) => user.completed);
    setTodoStatus("completed");

    setUserTodos(completed);
  };
  const filterNotComplete = () => {
    const notCompleted = userTodosData.filter((user) => !user.completed);

    setTodoStatus("notCompleted");
    setUserTodos(notCompleted);
  };
  return (
    <>
      <div style={buttonStyle}>
        <button
          className="btn btn-primary mr-1"
          onClick={() => filterComplete()}
        >
          Completed
        </button>
        <button
          className="btn btn-primary mr-1"
          onClick={() => filterNotComplete()}
        >
          Not Completed
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setTodoStatus("");
            getTodos();
          }}
        >
          All Todos
        </button>
      </div>
      {userTodos && <UserTodosTable userTodos={userTodos} />}
    </>
  );
};

export default UserTodos;
