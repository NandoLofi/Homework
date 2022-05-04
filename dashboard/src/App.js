import Sidebar from './components/Sidebar/Sidebar';
import './App.css'
import Reviews from './components/Reviews/Reviews'
import AverageRating from './components/AverageRating/AverageRating';
import Sentiment from './components/Sentiments/Sentiment';
import Visitors from './components/Visitors/Visitors';

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
    
    <div className='Sentiment'>
      <Sentiment/>
    </div>
    <div className='Visitors'>
      <Visitors/>
    </div>


  </div>
  </>
  );
}

export default App;
