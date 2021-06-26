import React from 'react';
import './styles/App.css';
import Theme from './Theme';
import Main from './containers/main'
import GlobalFonts from './fonts/fonts';


function App() {
  return (
    <Theme>
      <GlobalFonts />
        <Main />
    </Theme>
  );
}

export default App;
