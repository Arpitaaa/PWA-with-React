import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PersonHome from './components/PersonHome';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element = {<PersonHome/>} />
      
      <Route path = "/home" element = {<PersonHome/>} />
      <Route path = "/add" element = {<PersonAdd/>}/>
      <Route path = "/list" element = {<PersonList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
