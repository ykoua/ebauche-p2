
import './App.css';
import NavComponent from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Services';
import Contact from './Contact';
import Booking from './Booking';


function App() {
  return (
    
    <Router>
    <div className="App">
      <NavComponent />
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>  
          <Route path='/Services'>
            <Services />
          </Route>   
          <Route path='/Contact'>
            <Contact />
          </Route>  
          <Route path='/Booking'>
            <Booking />
          </Route> 
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
