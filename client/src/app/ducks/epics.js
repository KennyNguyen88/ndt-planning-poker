// import { GET_TICKETS, default as actions } from "./actions";
// import { ofType } from 'redux-observable';
// import { mapTo, delay, tap } from 'rxjs/operators';
// import {subscribeToTickets} from "../../api";
//
// const datas = [
//     {
//         id: 'id data 1',
//         ticketId: 'ticketId data 1',
//         sprintId: 'sprintId data 1',
//         createdTime: 'createdTime data 1',
//         modifiedTime: 'modifiedTime data 1'
//     },
//     {
//         id: 'id data 2',
//         ticketId: 'ticketId data 2',
//         sprintId: 'sprintId data 2',
//         createdTime: 'createdTime data 2',
//         modifiedTime: 'modifiedTime data 2'
//     }
// ];
//
//
// const getTicketsEpic = action$ => action$.pipe(
//     ofType(GET_TICKETS),
//     // tap(() => subscribeToTickets((result) => mapTo(actions.getTicketsSuccess(result))))
//     // mapTo(actions.getTicketsSuccess())
// );
//
// export default getTicketsEpic;