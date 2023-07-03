import logo from './logo.svg';
import LandingPage from './LandingPage';
import './App.css';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState('landing-page')

  function HandlePage(newPage){
    setPage(newPage)
  }
  return (
    <div className="App">
      {<LandingPage page = {page} HandleLogin = {HandlePage} HandleSignUp = {HandlePage} />}
    </div>
  );
}

export default App;
