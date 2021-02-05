import { User } from "../../classes/user";

const setUserReducer = (state: { user: User } = { user: new User() }, action: { type: string, user: User }) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        uer: action.user
      };
    default:
      return state;
  }
}

export default setUserReducer;
