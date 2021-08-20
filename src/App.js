import React from 'react';
import './styles/App.css';
import Theme from './Theme';
import Main from './containers/Main'
import GlobalFonts from './fonts/fonts';
// import Footer from './components/Footer'

function App() {
  return (
    <Theme>
      <GlobalFonts />
      <Main />
    </Theme>
  );
}

export default App;
