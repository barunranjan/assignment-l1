import React, { useRef } from "react";

const UserFilter = ({ users, setUsers, allUser, setAllUser }) => {
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      const filterUser = users.filter((user) => {
        const regex = new RegExp(`${e.target.value}`, "gi");
        return (
          user.name.match(regex) ||
          user.email.match(regex) ||
          user.address.city.match(regex)
        );
      });
      console.log(filterUser);
      setUsers(filterUser);
    } else {
      setUsers(allUser);
    }
  };
  return (
    <div className="d-flex justify-content-end align-items-center container  mt-2 mb-2 ">
      <div className="row ">
        <form>
          <div className="form-group">
            <input
              ref={text}
              type="text"
              className="form-control"
              style={{ float: "right" }}
              placeholder="Filter..."
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFilter;
