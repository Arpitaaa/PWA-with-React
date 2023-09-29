import React,{useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';

function PersonAdd() {

  const [name, setName] = useState('');

  const [names, setNames] = useState([]);

  const[error, setError] = useState('');
  const navigate = useNavigate();

  // Handle navigation to the list page
  const navigateToListPage = () => {
    navigate('/list'); 
  };

  const goHome =()=>{
    navigate('/home')
  }


  // Save names to local storage whenever the 'names' state changes
  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  const handleSubmit = () => {
    
    const trimmedName = name.trim();

    if (trimmedName === '') {
      setError('Name cannot be empty');
    } else {
      
      setNames([...names, trimmedName]);
      
      setName('');
      setError('');
    }
  };

  const handleChange = (e) => {
    
    setName(e.target.value);
    
    setError(''); // Clear any existing error when the user starts typing
  };

  return (
    <div>
      <button onClick={goHome}>Go Home</button>
      <h1>Name List App
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Name</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <button onClick ={navigateToListPage}>Go to List</button>

      <h2>List of Names:Here too for making it easily visible
        Delete functionality on LIST PAGE
      </h2>
    <ul className='name-list'>
      {names.map((n, index) => (
        <li key={index} className='name-list-item'>{n} 
        </li>
      ))}
    </ul>
    
    </div>
  
  );
}


export default PersonAdd
