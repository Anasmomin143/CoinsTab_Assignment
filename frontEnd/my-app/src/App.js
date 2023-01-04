import UserDataFetch from './components/UserDataFetch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route element={<UserDataFetch/>} path="/"></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
