import React, { useContext, useEffect } from "react";
import UserContext from "../../context/userContext/userContext";
import UserEditPage from "./userEdit/UserEditPage";

const UsersTable = ({ users, showForm, setShowForm }) => {
  const userContext = useContext(UserContext);
  const { current } = userContext;

  const {
    setCurrent,
    getUser,
    deleteUser,
    sortByNameAsc,
    sortByNameDsc,
    sortByEmailDsc,
    sortByEmailAsc,
    sortByCityAsc,
    sortByCityDsc,
  } = userContext;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const onnameSortAsc = () => {
    sortByNameAsc(users);
  };

  const onnameSortDsc = () => {
    sortByNameDsc(users);
  };
  const onemailSortAsc = () => {
    sortByEmailAsc(users);
  };
  const onemailSortDsc = () => {
    sortByEmailDsc(users);
  };
  const onCitySortAsc = () => {
    sortByCityAsc(users);
  };
  const onCitySortDsc = () => {
    sortByCityDsc(users);
  };

  const editUser = (data) => {
    setCurrent(data);
    setShowForm(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center container ">
      {!showForm && (
        <div className="row">
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
                  <i className="fa fa-caret-up" onClick={onCitySortAsc}></i>
                  City
                  <i className="fa fa-caret-down" onClick={onCitySortDsc}></i>
                </th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            {users.map((data) => {
              return (
                <tbody key={data.id}>
                  <tr>
                    <th scope="row">{data.name}</th>
                    <th scope="row">{data.email}</th>
                    <th scope="row">{data.address.city}</th>
                    <th scope="row">
                      <i
                        className="fas fa-edit"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          editUser(data);
                        }}
                      ></i>
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
      )}
      <div className="row">
        {current && showForm && (
          <UserEditPage current={current} setShowForm={setShowForm} />
        )}
      </div>
    </div>
  );
};

export default UsersTable;
