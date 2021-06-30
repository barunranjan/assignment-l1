import React, { useEffect, useState } from "react";
import UserEditPage from "./UserEditPage";

const UserEdit = (props) => {
  const id = props.match.params.id;
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [id]);

  if (user) {
    var currentUser = {};
    currentUser.name = user.name;
    currentUser.email = user.email;
    currentUser.city = user.address.city;
    console.log(currentUser);
  }

  return <div>{user && <UserEditPage current={currentUser} />}</div>;
};

export default UserEdit;
