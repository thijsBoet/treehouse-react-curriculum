import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {

    static propTypes = {
        removePlayer: PropTypes.func,
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        changeScore: PropTypes.func,
        index: PropTypes.number,
    }

    render() {
        const {
            removePlayer,
            id,
            name,
            score,
            changeScore,
            index
        } = this.props
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}><strong>x</strong></button>
                    {name}
                </span>
                <Counter
                    score={score}
                    changeScore={changeScore}
                    index={index} />
            </div>
        )
    }
}

export default Player