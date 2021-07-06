import React from 'react';
import './styles/App.css';
import Theme from './Theme';
import Main from './containers/Main'

function App() {
  return (
    <Theme>
      <div>
        <Main />
      </div>
    </Theme>
  );
}

export default App;
