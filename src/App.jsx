import HomePage from './HomePage';
import {Route,Routes} from "react-router-dom";
import ArchitectureMainPage from './components/ArchitecturePage/ArchitectureMainPage';
import InteriorMainPage from './components/InteriorPage/InteriorMainPage';
import './App.css';

function App() {

  return (
    <div className='single-page'>
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/architecture" element={<ArchitectureMainPage/>} /> 
        <Route path="/interior" element={<InteriorMainPage/>} /> 
      </Routes>
    </div>
  );
}

export default App
