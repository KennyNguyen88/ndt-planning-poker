import React from "react";
import { withState, withHandlers, compose } from "recompose";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import {createVote} from "../api";

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
            <div key={score} className="inputGroup mb-2">
                <input
                    type="radio"
                    value={score}
                    name="score"
                    id={`score${score}`}
                    onChange={handleScoreChange}
                    required
                    disabled={voted}
                />
                <label htmlFor={`score${score}`}> {score} </label>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pt-5">
                    <div className="row mb-3">
                        <div className="col-12">
                            <h2 className="text-center"> Vote for {ticketId} </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12 col-md-6 m-auto">
                                        <div className="form-group mb-0 ">
                                            <input
                                                type="text"
                                                placeholder="Input player name"
                                                name="player"
                                                value={playerName}
                                                onChange={handlePlayerName}
                                                className="form-control"
                                                required
                                                disabled={voted}
                                            />
                                            <div className="p-3">
                                                {inputScores}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {voted ? <div className="text-center mb-3">You voted {score} point(s) for {ticketId}</div> : ''}
                                <div className="row">
                                    <div className="col-12 d-flex flex-column">
                                        <div className="text-center mb-2"><button type="submit" className="btn btn-success"> VOTE </button></div>
                                        <div className="text-center"><Link to="/">Back</Link></div>

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}));

export default Voting;