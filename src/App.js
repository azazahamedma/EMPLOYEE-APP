//import logo from './logo.svg';
import './App.css';

//import {Home} from '../components/Home'
import {Department} from './components/Department'
import {Employee} from './components/Employee'
import { Navigation } from './components/Navigation'

import  Button  from 'react-bootstrap/Button'

import { BrowserRouter,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="container">

  <h3 className="mt-3 d-flex justify-content-center">
    React Demo</h3>
  <h5 className="mt-3 d-flex justify-content-center">
    Employee Portal</h5>

   

    <Switch>
      <Route path='/' Component={Home} exact/>
      
      <Route path='/department' Component={Department} />
      <Route path='/employee' Component={Employee} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
