import './App.css';
import Home from './Components/Home'
import Menubar from './Components/Menubar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import HospitalBeds from './Components/HospitalBeds';
import Oxygen from './Components/Oxygen'
import Plasma from './Components/Plasma'
import FoodResources from './Components/FoodResources'
import Tweets from './Components/Tweets'
import CovidStats from './Components/CovidStats'
import TelegramGroups from './Components/TelegramGroups'

function App() {




  return (
    <Router>
    <div className="App">
      <div className="container">
      <Menubar />
      <Switch>
      <Route exact path="Helpus/HospitalBeds">
          <HospitalBeds/>
        </Route>
        <Route exact path="Helpus/Oxygen">
          <Oxygen/>
        </Route>
        <Route exact path="Helpus/Plasma">
          <Plasma/>
        </Route>
        <Route exact path="/Helpus">
          <Home/>
        </Route>
        <Route exact path="Helpus/FoodResources">
          <FoodResources/>
        </Route>
        <Route exact path="Helpus/Tweets">
          <Tweets/>
        </Route>
        <Route exact path="Helpus/CovidStats">
          <CovidStats/>
        </Route>
        <Route exact path="Helpus/TelegramGroups">
          <TelegramGroups/>
        </Route>
        
      </Switch>
      </div>
    </div>
    </Router>
   );
}

export default App;
