import Sidebar from './components/Sidebar/Sidebar';
import './App.css'
import Reviews from './components/Reviews/Reviews'
import AverageRating from './components/AverageRating/AverageRating';

function App() {
  return (
  <>
  <div className='AllContent'>
  
    <div className='Sidebar'>
      <Sidebar/>
    </div>
    
    <div className='Reviews'>
      <Reviews/>
    </div>
    
    <div className='AverageRating'>
      <AverageRating />
    </div>
  
  </div>
  </>
  );
}

export default App;
