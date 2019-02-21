
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import TamagotchiList from './TamagotchiList';
import { v4 } from 'uuid';
import Egg from '../assets/img/egg.gif';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: [
        {
          name: "Squirtle",
          image: Egg,
        },

      ]
    }

    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked(event) {
    this.setState({ play: this.state.play + 1 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HashRouter>
            <Switch>
              {/* <Home /> */}
              <Route exact path='/' render={() => <TamagotchiList tamagotchiList={this.state.masterTamagotchi} />} />
              {this.state.play}
              <button onClick={this.buttonClicked}>⬆ </button>
            </Switch>
          </HashRouter>

        </header>
      </div>

    );
  }
}


export default App;                                                                                                              