
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import TamagotchiList from './TamagotchiList';
import { v4 } from 'uuid';
import Mimitchi from '../assets/img/Memetchi.png';
import Mametchi from '../assets/img/Mametchi.png';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: [
        {
          name: "Memetchi",
          image: Memetchi,
          play: 50,
          sleep: 50,
          hygene: 50,
          happy: 50,
          feed: 50,
          key: v4()
        },
        {
          name: "Mametchi",
          image: Mametchi,
          play: 50,
          sleep: 50,
          hygene: 50,
          happy: 50,
          feed: 50,
          key: v4()
        }

      ]
    }
    // masterActivity: [
    //   {
    //     name: "play",
    //     score: 50,
    //     key: v4()
    //   },
    //   {
    //     name: "feed",
    //     score: 50,
    //     key: v4()
    //   },
    //   {
    //     name: "happy",
    //     score: 50,
    //     key: v4()
    //   }
    // ]

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HashRouter>
            <Switch>
              {/* <Home /> */}
              <Route exact path='/' render={() => <TamagotchiList tamagotchiList={this.state.masterTamagotchi} />} />
            </Switch>
          </HashRouter>
        </header>
      </div>

    );
  }
}


export default App;                                                                                                              