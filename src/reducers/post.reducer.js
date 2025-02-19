import { ADD_POST, GET_POSTS } from "../actions/post.action";

const initialState = { user: "Hello" };

export default function postReducer(state = initialState, action) {
    //SWITCH
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state]
        default:
            return state
    }

}