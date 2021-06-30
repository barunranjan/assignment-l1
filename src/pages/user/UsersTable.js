import React from "react";
import { Link } from "react-router-dom";

const UsersTable = ({ users, setUsers }) => {
  const onnameSortAsc = (e) => {
    setUsers(
      users.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      )
    );
  };
  const onnameSortDsc = (e) => {
    setUsers(
      users.sort((a, b) =>
        b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
      )
    );
  };
  const oncitySortAsc = (e) => {
    setUsers(
      users.sort((a, b) =>
        a.address.city.toLowerCase() > b.address.city.toLowerCase() ? 1 : -1
      )
    );
  };
  const oncitySortDsc = (e) => {
    setUsers(
      users.sort((a, b) =>
        b.address.city.toLowerCase() > a.address.city.toLowerCase() ? 1 : -1
      )
    );
  };
  const onemailSortAsc = (e) => {
    setUsers(
      users.sort((a, b) =>
        a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1
      )
    );
  };
  const onemailSortDsc = (e) => {
    setUsers(
      users.sort((a, b) =>
        b.email.toLowerCase() > a.email.toLowerCase() ? 1 : -1
      )
    );
  };
  const deleteUser = (e) => {
    console.log(e);
    setUsers(users.filter((item) => item.id !== e));
  };

  return (
    <div className="d-flex justify-content-center align-items-center container ">
      <div className="row ">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                <i className="fa fa-caret-up" onClick={onnameSortAsc}></i>
                Name
                <i className="fa fa-caret-down" onClick={onnameSortDsc}></i>
              </th>
              <th scope="col">
                <i className="fa fa-caret-up" onClick={onemailSortAsc}></i>
                Email
                <i className="fa fa-caret-down" onClick={onemailSortDsc}></i>
              </th>
              <th scope="col">
                <i className="fa fa-caret-up" onClick={oncitySortAsc}></i>
                City
                <i className="fa fa-caret-down" onClick={oncitySortDsc}></i>
              </th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          {users.map((data) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{data.name}</th>
                  <th scope="row">{data.email}</th>
                  <th scope="row">{data.address.city}</th>
                  <th scope="row">
                    <Link to={`/user/edit/${data.id}`}>
                      <i className="fas fa-edit"></i>
                    </Link>
                  </th>
                  <th scope="row">
                    <i
                      className="fas fa-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        deleteUser(data.id);
                      }}
                    ></i>
                  </th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
