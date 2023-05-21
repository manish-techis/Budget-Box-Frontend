import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import  Login  from './components/Login'
import  Home  from './components/Home'
import  Signup  from './components/Signup'
import  Profile  from './components/Profile'
import './App.css';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Signup  />} />
        <Route path='/profile' element={<Profile  />} />
        
      </Routes>
    </Router>
   </>
  );
}

export default App;
