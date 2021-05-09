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
import {Navbar,Nav, Container,Badge} from 'react-bootstrap'
function App() {




  return (
    <Router>
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
      <Container fluid>
      <Menubar />
      <Badge variant="primary">Primary</Badge>{' '}
      <Switch>
      <Route exact path="/Helpus/HospitalBeds">
          <HospitalBeds/>
        </Route>
        <Route exact path="/Helpus/Oxygen">
          <Oxygen/>
        </Route>
        <Route exact path="/Helpus/Plasma">
          <Plasma/>
        </Route>
        <Route exact path="/Helpus">
          <Home/>
        </Route>
        <Route exact path="/Helpus/FoodResources">
          <FoodResources/>
        </Route>
        <Route exact path="/Helpus/Tweets">
          <Tweets/>
        </Route>
        <Route exact path="/Helpus/CovidStats">
          <CovidStats/>
        </Route>
        <Route exact path="/Helpus/TelegramGroups">
          <TelegramGroups/>
        </Route>
        
      </Switch>
      </Container>
    </div>
    </Router>
   );
}

export default App;
