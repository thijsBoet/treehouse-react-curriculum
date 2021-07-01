const players = [
  
]

const myTitleID = "main-title";


class Counter extends React.Component {
  state = {
    score: 0
  }

  decrementScore = () => {
    this.setState(prevState => ({
        score: prevState.score - 1
    }));
  }

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrementScore} className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button onClick={this.incrementScore} className="counter-action increment"> + </button>
      </div>
    )
  }
}

const Header = (props) => (
  <header>
    <h1 id={myTitleID}>{props.title}</h1>
    <p className="main-desc">players: {props.totalPlayers}</p>
  </header>
);

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
        { props.name }
      </span>
      <Counter />
    </div>
  )
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Matthijs Boet",
        id: 1,
      },
      {
        name: "Gideon Visbeen",
        id: 2,
      },
      {
        name: "Raoul Verveer" ,
        id: 3,
      },
      {
        name: "Gavino Muroni",
        id: 4,
      }
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayers={ this.state.players.length }/>
          {this.state.players.map(player =>
            <Player
              name={player.name}
              id={player.id}
              removePlayer={this.handleRemovePlayer}
              key={player.id.toString()}
            />)}
      </div>
    )
  }
  
}

ReactDOM.render(
  <App /> ,
  document.getElementById("root")
);
