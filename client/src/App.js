import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import DogInfo from './components/Details/DogInfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<DogInfo/>}/>
    </Routes>
  );
}

export default App;
