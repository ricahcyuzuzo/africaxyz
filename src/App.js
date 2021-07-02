import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/HomeSection';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
