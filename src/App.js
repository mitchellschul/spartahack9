import logo from './logo.svg';
import './CSS/Nav.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import DataPage from './Views/DataPage';
import Home from './Views/Home';
import Drinks from './Views/Drinks';
import Inventory from './Views/Inventory';

function App() {



  return (

    <Router>


      <nav class="nav-container">
        <ul>


          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/datapage">Stats</Link>
          </li>


        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>

        <Route path="/drinks" element={<Drinks />}>
        </Route>
        <Route path="/inventory" element={<Inventory />}>
        </Route>
        <Route path="/datapage" element={<DataPage />}>
        </Route>

      </Routes>


    </Router >


  );
}

export default App;
