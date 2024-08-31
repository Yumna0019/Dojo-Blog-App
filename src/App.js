import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router , Rote , Switch } from 'react-router-dom';

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


// npx json-server --watch data/db.json --port 8000      ==>for json-server watch api
// npm install react-router-dom@5                        ==>for react-router-dom