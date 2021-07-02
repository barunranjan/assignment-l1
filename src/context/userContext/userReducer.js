import {
  GET_USER,
  DELETE_USER,
  SET_CURRENT,
  UPDATE_USER,
  FILTER_USER,
  SORT_CITY_DSC,
  SORT_CITY_ASC,
  SORT_NAME_ASC,
  SORT_NAME_DSC,
  SORT_EMAIL_ASC,
  SORT_EMAIL_DSC,
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case SORT_NAME_ASC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_NAME_DSC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_EMAIL_ASC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_EMAIL_DSC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          b.email.toLowerCase() > a.email.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_CITY_ASC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.address.city.toLowerCase() > b.address.city.toLowerCase() ? 1 : -1
        ),
      };
    case SORT_CITY_DSC:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          b.address.city.toLowerCase() > a.address.city.toLowerCase() ? 1 : -1
        ),
      };

    case FILTER_USER:
      return {
        ...state,
        users: state.users.filter((user) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            user.name.match(regex) ||
            user.email.match(regex) ||
            user.address.city.match(regex)
          );
        }),
      };

    default:
      return state;
  }
};
