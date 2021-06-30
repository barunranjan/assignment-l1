import React, { useEffect, useState } from "react";

const RegistrationForm = ({ current }) => {
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
    city: "",
  });

  const { name, email, city } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));
    // }
    console.log(user);
  };

  return (
    <div className="d-flex justify-content-center align-items-center container ">
      <div className="row ">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="inputUserName" className="control-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="inputPassword" className="control-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label for="city" className="control-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={city}
              onChange={onChange}
            />
          </div>
          <div>
            <input type="submit" className="btn btn-primary btn-block" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
