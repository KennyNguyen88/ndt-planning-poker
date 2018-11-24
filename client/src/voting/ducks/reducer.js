import {combineReducers} from "redux";
import {VOTE, VOTE_SUCCESS, VOTE_FAIL} from "./actions";

/* State Shape
{
    votingReducer: {voted: false}
}
 */

const votingReducer = (state = {voted: false}, action) => {
    switch(action.type){
        case VOTE:
            return {voted: false };
        case VOTE_SUCCESS:
            return {voted: true };
        case VOTE_FAIL:
            return {voted: false};
        default:
            return state;
    }
};

export default combineReducers({
    votingReducer
});