import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function PersonList() {

  const [names, setNames] = useState([]);

  const navigate = useNavigate();

  const goHome =()=>{
    navigate('/home')
  }

  const moreNames =()=>{
    navigate('/add')
  }
  

  const retrieveSavedNames = () => {
    const savedNames = JSON.parse(localStorage.getItem('names')) || [];
    setNames(savedNames);
    
  };

  // Load saved names when the component mounts
  useEffect(() => {
    retrieveSavedNames();
  }, []);


     //to remove names
     const removeName = (index) => {
      const updatedNames = [...names];
      updatedNames.splice(index, 1);
      setNames(updatedNames);
    };

  
  return (
    <div>
      <button onClick={goHome}>Go Home</button>
      <h2>List of Names:</h2>
      <button onClick={moreNames}>To Add More Names</button>
      <ul>
        {names.map((names, index) => (
          <li key={index}>{names} <button onClick={() => removeName(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
  </div>
    

    
  );
}


export default PersonList
