import UserDataFetch from './components/UserDataFetch';
import UserDetails from './components/UserDetails'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route element={<UserDataFetch/>} path="/"></Route>
        <Route element={<UserDetails/>} path="/userdetails"></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
