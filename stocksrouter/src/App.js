import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Nav from './Components/Nav'
import Directory from './Pages/StockDirectory';
import Prices from './Pages/Price';


function App() {
  return (
  <div className="App">
  <Nav />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/directory/" element={<Directory/>} />
    <Route path="/prices/:symbol" element={<Prices/>} />




  </Routes>
  </div>
  );
}

export default App;
