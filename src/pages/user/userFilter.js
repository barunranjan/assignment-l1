import React, { useContext, useRef } from "react";
import UserContext from "../../context/userContext/userContext";

const UserFilter = () => {
  const userContext = useContext(UserContext);
  const { filterUser, getUser } = userContext;
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterUser(e.target.value);
    } else {
      getUser();
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
