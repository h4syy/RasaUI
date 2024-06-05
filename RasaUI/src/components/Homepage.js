import React, { useEffect, useState } from 'react';
import {useNavigate, Route} from 'react-router-dom';
import Basic from './Basic';
import { Link } from "react-router-dom";

const Homepage = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    
    if(name !== ""){    
        e.preventDefault();
    localStorage.setItem("name", name);
    setSubmitted(true); 
    navigate('/basic');
    }
    else{
        window.alert("Please enter name");
    }

       
  };

  useEffect(() => {
    // Retrieve stored name from localStorage on component mount
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(JSON.parse(storedName));
    }
  }, []);


  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Enter Your Full Name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSubmitted(false); // Reset submitted state on name change
          }}
        />
        <input type="submit" value="Submit" />
        
      </form>
      {submitted && <p>Name saved: {name}</p>}
    </div>
  );
};

export default Homepage;
