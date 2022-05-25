
import './App.css';
import Nav from './Componant.js/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './Componant.js/Home';
import Student from './Componant.js/Student';
import Contact from './Componant.js/Contact';

function App() {
  return (
    <>
   <Router> 
      <Nav />

      </Router>

      <Router>
        <Home />
        <Student />
        <Contact />
      </Router>
 
 </>
    
  );
}

export default App;
