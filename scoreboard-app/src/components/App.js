import React from 'react'
import AddPlayerForm from './AddPlayerForm';
import Player from './Player';
import Header from './Header';

class App extends React.Component {
  state = {
    players: [
      {
        name: "Matthijs Boet",
        score: 100,
        id: 1,
      },
      {
        name: "Gideon Visbeen",
        score: 90,
        id: 2,
      },
      {
        name: "Raoul Verveer" ,
        score: 95,
        id: 3,
      },
      {
        name: "Gavino Muroni",
        score: 80,
        id: 4,
      }
    ]
  }

  prevPlayerId = 4

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" players={ this.state.players}/>
          {this.state.players.map((player, index) =>
            <Player
              name={player.name}
              score={ player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
            />)}
        <AddPlayerForm addPlayer={ this.handleAddPlayer }/>
      </div>
    )
  }
  
}

export default App;