import { Route, Routes } from 'react-router-dom';
import AddCar from './components/AddCar/AddCar';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';


function App() {
  return (
    <div className="container bg-base-100 mx-auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addCar' element={<AddCar />}></Route>
      </Routes>

    </div>

  );
}

export default App;
