import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

import {
  GET_USER,
  DELETE_USER,
  SET_CURRENT,
  UPDATE_USER,
  FILTER_USER,
  SORT_NAME_ASC,
  SORT_NAME_DSC,
  SORT_EMAIL_ASC,
  SORT_EMAIL_DSC,
  SORT_CITY_DSC,
  SORT_CITY_ASC,
} from "../type";

const UserState = (props) => {
  const initialState = {
    users: [],
    current: null,
    error: null,

    filtered: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUser = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await data.json();

      dispatch({ type: GET_USER, payload: res });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };
  const updateUser = (user) => {
    dispatch({ type: UPDATE_USER, payload: user });
  };
  const setCurrent = (user) => {
    dispatch({ type: SET_CURRENT, payload: user });
  };
  const sortByNameAsc = (users) => {
    dispatch({ type: SORT_NAME_ASC, payload: users });
  };
  const sortByNameDsc = (users) => {
    dispatch({ type: SORT_NAME_DSC, payload: users });
  };
  const sortByEmailAsc = (users) => {
    dispatch({ type: SORT_EMAIL_ASC, payload: users });
  };
  const sortByEmailDsc = (users) => {
    dispatch({ type: SORT_EMAIL_DSC, payload: users });
  };
  const sortByCityAsc = (users) => {
    dispatch({ type: SORT_CITY_ASC, payload: users });
  };
  const sortByCityDsc = (users) => {
    dispatch({ type: SORT_CITY_DSC, payload: users });
  };
  const filterUser = (text) => {
    dispatch({ type: FILTER_USER, payload: text });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        current: state.current,
        error: state.error,
        filtered: state.filtered,
        getUser,
        deleteUser,
        setCurrent,
        updateUser,
        sortByNameAsc,
        sortByNameDsc,
        sortByEmailAsc,
        sortByEmailDsc,
        sortByCityDsc,
        sortByCityAsc,
        filterUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
