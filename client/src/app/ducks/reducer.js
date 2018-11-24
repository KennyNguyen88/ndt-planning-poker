// import {combineReducers} from "redux";
// import {GET_TICKETS, GET_TICKETS_SUCCESS, GET_TICKETS_FAIL} from "./actions";
//
// /* State Shape
// {
//     appReducer: {tickets: [], fetching: false}
// }
//  */
//
// const appReducer = (state = {tickets: [], fetching: false}, action) => {
//     switch(action.type){
//         case GET_TICKETS:
//             return {...state, fetching: true };
//         case GET_TICKETS_SUCCESS:
//             return {tickets: action.payload, fetching: false };
//         case GET_TICKETS_FAIL:
//             return {tickets: [], fetching: false};
//         default:
//             return state;
//     }
// };
//
// export default combineReducers({
//     appReducer
// });