import logo from './logo.svg';
import {LandingPage} from './LandingPage';
import {HomePage} from './HomePage'
import './App.css';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState('landing-page')
  const [signIn, setSignIn] = useState(0);

  function HandlePage(newPage){
    setPage(newPage)
  }
  //use useeffect to determine sign in state too
  function signInHandler(state){
    setSignIn(state)
  }
  return (
    <div className="App">
      {!signIn?<LandingPage page = {page} HandleLogin = {HandlePage} HandleSignUp = {HandlePage} signInHandler = {signInHandler}  /> : <HomePage/>}
    </div>
  );
}

export default App;
