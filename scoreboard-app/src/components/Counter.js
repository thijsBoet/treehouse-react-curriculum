import React from 'react';
import PropTypes from 'prop-types';


const Counter = ({
    index,
    score,
    changeScore,
    }) => {


    return (
        <div className="counter">
            <button onClick={() => changeScore(index,-5)} className="counter-action decrement"> - </button>
            <span className="counter-score">{ score }</span>
            <button onClick={() => changeScore(index,+5)} className="counter-action increment"> + </button>
        </div>
    )
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    chang: PropTypes.func
}

export default Counter;