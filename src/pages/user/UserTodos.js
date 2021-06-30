import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserTodosTable from "./UserTodosTable";

const UserTodos = () => {
  let { id } = useParams();
  console.log(id);
  const [userTodos, setUserTodos] = useState(null);
  const [userTodosData, setUserTodosData] = useState(null);

  const getTodos = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUserTodos(json);
        setUserTodosData(json);
      });
  };
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [id]);

  const buttonStyle = {
    display: "flex",
    justifyContent: "flex-end",
    margin: "20px",
  };

  const filterComplete = () => {
    const completed = userTodosData.filter((user) => user.completed);
    console.log(userTodos);
    setUserTodos(completed);
  };
  const filterNotComplete = () => {
    const notCompleted = userTodosData.filter((user) => !user.completed);
    console.log(userTodos);
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
        <button className="btn btn-primary" onClick={() => getTodos()}>
          All Todos
        </button>
      </div>
      {userTodos && <UserTodosTable userTodos={userTodos} />}
    </>
  );
};

export default UserTodos;
