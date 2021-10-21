import logo from './logo.svg';
import './App.css';

import './components/LandingPage/LandingPage.css';
import './components/MainPage/MainPage.css';
import './components/LeaderBoardPage/LeaderBoard.css';
import './components/ShipCardPage/ShipCardPage.css';

import LandingPage from "./components/LandingPage/LandingPage"
import MainPage from "./components/MainPage/MainPage"
import LeaderBoardPage from "./components/LeaderBoardPage/LeaderBoardPage"
import ShipCardPage from "./components/ShipCardPage/ShipCardPage"

function App() {
  return (
    <div className="App">
      {
        LandingPage()
      }
      {
        MainPage()
      }
      {
        LeaderBoardPage()
      }
      {
        ShipCardPage()
      }
    </div>
  );
}

export default App;
