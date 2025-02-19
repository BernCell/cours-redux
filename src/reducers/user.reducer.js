import { GET_USER } from "../actions/user.action";

const initialState = { user: "Bern" };

export default function userReducer(state = initialState, action) {
    //SWITCH
    switch (action.type) {
        case GET_USER:
            return action.payload;
        default:
            return state;
    }

}

