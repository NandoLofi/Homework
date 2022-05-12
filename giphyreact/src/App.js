import './App.css';
import {useState} from 'react'
import Form from './components/forms/Form';
import Container from './components/giphycontainer/Container';


function App() {
  const APIKEY = "pDZSGN1VknA35Rd3V6FPofkywH2CSn8d"
  const [giphy, setGiphy] = useState([])
  const getGiph = async(tagTerm)=> {
  const response = await fetch (`
  https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=${tagTerm}&rating=pg
`)
const data = await response.json()
setGiphy(data)

}

  return (
    <div className="App">
      <h1>Search for Giphy!</h1>
      <Container giphy={giphy}/>
      <Form getGiph={getGiph} />
  
    </div>
  );
}

export default App;
