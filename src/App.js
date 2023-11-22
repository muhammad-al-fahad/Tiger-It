import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Validation from './components/Validation' 

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/validation" element={<Validation /> } />
      </Routes>
    </Router>
  );
}

export default App;
