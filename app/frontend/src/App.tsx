import './App.css'
import Members from './pages/members'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/members" element={<Members />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
