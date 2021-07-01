import React, { Component } from 'react';

class AddPlayerForm extends Component {
    playerInput = React.createRef()

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value)
        e.currentTarget.reset();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter a player's name"
                    onChange={this.handleValueChange}
                    ref={this.playerInput}
                />
                <input type="submit" value="Add Player" />
            </form>
        );
    }
}

export default AddPlayerForm;
