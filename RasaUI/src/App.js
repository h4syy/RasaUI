import './App.css';
import Basic from "./components/Basic";
import Homepage from './components/Homepage';
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
 
      <h1> ImePay</h1>

      <Router>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/basic" element={<Basic/>} />
        </Routes>
      </Router>
    {/* <Homepage/> */}
      {/* <Basic /> */}
    </div>
  );
}

export default App;
