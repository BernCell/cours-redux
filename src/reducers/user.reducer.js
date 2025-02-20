import { ADD_USER_LIKE, GET_USER } from "../actions/user.action";

const initialState = { user: "Bern" };

export default function userReducer(state = initialState, action) {
    //SWITCH
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case ADD_USER_LIKE:
            return {
                ...state,
                likes: action.payload.likes,
            };

        default:
            return state;
    }
}
