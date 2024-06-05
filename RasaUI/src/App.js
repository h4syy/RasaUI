import './App.css';
import Basic from "./components/Basic";
import Homepage from './components/Homepage';
import logo from './assets/imelogo.jpg';

import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
    <div class="header">
    
	<div class="top-header">
		  <div class="logo-container">
				  <img src={logo} alt="ImePay Logo" class="logo-img"/> 
			  
		  </div>
      
		  
		 
		
	  
	</div>
  </div>


      <Router>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/basic" element={<Basic/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
