import React from 'react';
import './styles/App.css';
import Theme from './Theme';
import Main from './containers/Main'
import GlobalFonts from './fonts/fonts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Theme>
      <GlobalFonts />
        <Navbar />
        <Main />
        <Footer/>
    </Theme>
  );
}

export default App;
