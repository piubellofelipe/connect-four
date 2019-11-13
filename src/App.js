import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import Game from './components/game'

class App extends React.Component {

  render (){
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
