import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../context/userContext/userContext";

const UserEditPage = ({ current, setShowForm }) => {
  const userContext = useContext(UserContext);
  const { updateUser } = userContext;
  useEffect(() => {
    if (current != null) {
      setUser(current);
    } else {
      setUser({
        name: "",
        email: "",
        city: "",
      });
    }
  }, [current]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: {
      city: "",
    },
  });

  const { name, email, address } = user;
  const { city } = address;

  const onChangeName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const onChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const onChangeCity = (e) => {
    setUser({
      ...user,
      address: {
        city: e.target.value,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(user);
    setShowForm(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center container ">
      <div className="row ">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="inputUserName" className="control-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="control-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city" className="control-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={city}
              onChange={onChangeCity}
            />
          </div>
          <div>
            <input type="submit" className="btn btn-primary btn-block" />
            <button
              className="btn btn-secondary btn-block"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;
