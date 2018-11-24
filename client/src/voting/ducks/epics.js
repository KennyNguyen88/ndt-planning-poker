import { VOTE, default as actions } from "./actions";
import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

const votingEpic = action$ => action$.pipe(
    ofType(VOTE),
    delay(1000),
    mapTo(actions.doVoteSuccess())
);

export default votingEpic;