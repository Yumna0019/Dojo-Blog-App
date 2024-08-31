import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


// npx json-server --watch data/db.json --port 8000      ==>for json-server watch api
// npm install react-router-dom@5                        ==>for react-router-dom