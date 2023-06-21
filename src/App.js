import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Add from './Add';
import Subtract from './Subtract';
import Multiply from './Multiply';
import Divide from './Divide';

const App = () => {
  return (
    <div>
      <p>Work on 21 and 7</p>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/add?x=21&y=7">Add</Link>
              </li>
              <li>
                <Link to="/subtract?x=21&y=7">Subtract</Link>
              </li>
              <li>
                <Link to="/multiply?x=21&y=7">Multiply</Link>
              </li>
              <li>
                <Link to="/divide?x=21&y=7">Divide</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/subtract" element={<Subtract />} />
            <Route path="/multiply" element={<Multiply />} />
            <Route path="/divide" element={<Divide />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
