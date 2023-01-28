import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import IdSearch from './components/IdSearch';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<IdSearch />} />
      </Routes>
    </div>
  );
}

export default App;
