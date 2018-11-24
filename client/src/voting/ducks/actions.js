//action types

export const VOTE = 'voting/VOTE';
export const VOTE_SUCCESS = 'voting/VOTE_SUCCESS';
export const VOTE_FAIL = 'voting/VOTE_FAIL';

//actions

const doVote = (vote) => {
    return {
        type: VOTE,
        payload: vote
    }
};

const doVoteSuccess = () => {
    return {
        type: VOTE_SUCCESS
    }
};

const doVoteFail = () => {
    return {
        type: VOTE_FAIL
    }
};


export default {
    doVote,
    doVoteSuccess,
    doVoteFail
};