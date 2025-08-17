
import './App.css';
import Marketing from './Components/Marketing';
import Header from './Components/Header';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
       <Header  />
      <Marketing/>
    </div>
    </BrowserRouter>
  );
}

export default App;
