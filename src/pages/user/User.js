import React, { Fragment, useContext, useState } from "react";
import Pagination from "../../components/Pagination";
import UserContext from "../../context/userContext/userContext";
import UserFilter from "./userFilter";
import UsersTable from "./UsersTable";

const User = () => {
  const userContext = useContext(UserContext);
  const { users } = userContext;
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(5);
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      {!showForm && <UserFilter />}

      <UsersTable
        key={currentUser.id}
        users={users.length > 5 ? currentUser : users}
        setShowForm={setShowForm}
        showForm={showForm}
      />
      {!showForm && (
        <Pagination
          userPerPage={userPerPage}
          totalUser={users.length}
          paginate={paginate}
        />
      )}
    </Fragment>
  );
};

export default User;
