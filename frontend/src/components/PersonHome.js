import Object from './Object';

import { Canvas } from 'react-three-fiber';
import { useNavigate } from 'react-router-dom';

function PersonHome(){

  const navigate = useNavigate();
  const moreNames =()=>{
    navigate('/add')
  }

  const navigateToListPage = () => {
    navigate('/list'); 
  };
    return (

      
        <div className="App" style={{ height: '300vh', overflow: 'hidden' }}>
          <button onClick={moreNames}>Add Names   </button>
          <button onClick ={navigateToListPage}>Show list</button>
          <h1 style={{textAlign : "center"}}>THIS IS HOME PAGE</h1>
      <Canvas camera={{ position: [0, 0, 5] }} style={{ position: 'fixed' }} resize={{ scroll: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Object />
      </Canvas>
      <div style={{ height: '200vh' }}></div>
      
    </div>
  );
}
  

export default PersonHome


