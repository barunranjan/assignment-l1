import React from "react";

const UserTodosTable = ({ userTodos }) => {
  return (
    <div className="d-flex justify-content-center align-items-center container ">
      <div className="row ">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>UserId</th>
              <th>Todos</th>
              <th>Status</th>
            </tr>
          </thead>
          {userTodos.map((user) => {
            return (
              <tbody key={user.id}>
                <tr>
                  <th>{user.userId}</th>
                  <th>{user.title}</th>
                  <th>{user.completed ? "Completed" : "Not completed"}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default UserTodosTable;
