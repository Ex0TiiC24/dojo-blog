import Navbar from './navbar';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Navbar />
        
        <div className="content">
          <Home />
        </div>
    </div>
  );
}

export default App;
