import Sidebar from './components/Sidebar/Sidebar';
import './App.css'
import Reviews from './components/Reviews/Reviews'
import AverageRating from './components/AverageRating/AverageRating';
import Sentiment from './components/Sentiments/Sentiment';
import Visitors from './components/Visitors/Visitors';

function App() {
  return (
  <>
  <div className='AllComponents'>
  <Sidebar/>
  <Sentiment/>
  <Reviews/>
  <AverageRating/>
  <Visitors/>
  </div>
  </>
  );
}

export default App;
