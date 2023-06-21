import './app.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from  './pages/About'
import Services from  './pages/Services'
import Contact from  './pages/Contact'
import Nav from './nav/Nav';
import Error from './pages/Error';
import Admin from './pages/Admin';

const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact/:name' element={<Contact/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App