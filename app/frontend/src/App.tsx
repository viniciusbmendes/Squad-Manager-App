import './App.css'
import Players from './pages/players'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="/members" element={<Players />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
