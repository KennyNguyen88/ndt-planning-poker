import React from "react";
import { withState, withHandlers, compose } from "recompose";
import {withRouter} from "react-router-dom";
// import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {createVote} from "../api";
// import {votingActions} from "../voting/ducks";

const enhance = compose(
    withState('playerName','updatePlayerName',''),
    withState('score','updateScore',void 0),
    withState('voted','updateVoted',false),
    withHandlers({
        doVote: ({playerName, match, score, updateVoted}) => () => {

            const vote = {
                playerName,
                ticketId: match.params.ticketId,
                score,
                createdDate: new Date(),
                modifiedDate: new Date()
            };

            createVote(
                vote,
                () => {
                    updateVoted(true)
                }
            );
        }
    }),
    withHandlers({
        handleSubmit: ({doVote}) => (event) => {
            event.preventDefault();
            doVote();
        }
    }),
    withHandlers({
        handlePlayerName: ({updatePlayerName}) => event => {
            const newPlayerName = event.target.value;
            updatePlayerName(oldPlayerName => newPlayerName);
        },
        handleScoreChange: ({updateScore, handleSubmit}) => event => {
            const newScore = event.target.value;
            updateScore(oldScore => newScore);
        }
    })
);

const Voting = withRouter(enhance(({history,match,
                                       playerName,score,
                                       handlePlayerName,handleScoreChange,handleSubmit,
                                       voted
                                   }) => {

    const ticketId = match.params.ticketId;

    const scores = [1,2,3,5,8,13];

    const inputScores = scores.map(score => {
        return (
            <div key={score}>
                <input
                    type="radio"
                    value={score}
                    name="score"
                    id={`score${score}`}
                    onChange={handleScoreChange}
                />
                <label htmlFor={`score${score}`}> {score} </label>
            </div>
        )
    });

    const backToHome = <Link to="/">Back</Link>;
    const infoSuccess = <label>You voted {score} point(s) for {ticketId}</label>;

    return (
        <div>
            <h1> Vote for {ticketId} </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Input player name"
                    name="player"
                    value={playerName}
                    onChange={handlePlayerName}
                    required
                />
                {inputScores}
                <button type="submit"> OK </button>
                {backToHome}
                {voted ? infoSuccess : ''}
            </form>
        </div>
    )
}));

export default Voting;