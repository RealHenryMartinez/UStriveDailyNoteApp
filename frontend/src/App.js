

import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Regular from './screens/Regular';
import SideBar from './components/SideBar';
import Weekly from './screens/Weekly';

function App() {

  return(
    <>
        <Router>
          <SideBar />
            <Routes>
              <Route path='/' exact element={<Regular />} />
              
              <Route path='/weekly' element={<Weekly />} />
            </Routes>
      </Router>
    </>
    
  );
}

export default App;