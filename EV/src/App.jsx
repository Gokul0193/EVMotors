import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
      
        <Route element={<Authentication />}>
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
