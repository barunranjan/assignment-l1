import React, { Fragment, useEffect, useState } from "react";

import Pagination from "../../components/Pagination";
import UsersTable from "./UsersTable";
import UserFilter from "./userFilter";

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setAllUser(json);
      });
  }, []);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(currentUser);

  return (
    <Fragment>
      <UserFilter
        users={users}
        setUsers={setUsers}
        allUser={allUser}
        setAllUser={setUsers}
      />
      <UsersTable
        key={currentUser.id}
        users={currentUser}
        setUsers={setUsers}
      />
      <Pagination
        userPerPage={userPerPage}
        totalUser={users.length}
        paginate={paginate}
      />
    </Fragment>
  );
};

export default User;
