import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About'
import User from './pages/User'
import Error from './pages/Error';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/users' element={<User />} />
        <Route path='*' element={<Error />} />
        <Route path='/error-test' element={<ErrorBoundary/>} />
      </Routes>
    </Router>
  );
}

export default App;
