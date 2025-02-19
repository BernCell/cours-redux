import { ADD_POST, EDIT_POST, GET_POSTS } from "../actions/post.action";

const initialState = { user: "Hello" };

export default function postReducer(state = initialState, action) {
    //SWITCH
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case ADD_POST:
            return [action.payload, ...state]
        case EDIT_POST:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content,
                    };
                } else return post;
            });
        default:
            return state;
    }

}