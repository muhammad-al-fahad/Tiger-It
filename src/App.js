import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Validation from './Components/Validation/Validation' 
import Navbar from "./Components/Navbar/Navbar"
import Message from "./Components/Message/Message";
import Welcome from "./Components/Welcome/welcome";

function App() {
  return (
    <Router >
    <Navbar/>
      <Routes >
        <Route path="/" element={<Welcome /> } />
        <Route path="/validation" element={<Validation /> } />
        <Route path="/validation/message" element={<Message /> } />
      </Routes>
    </Router>
  );
}

export default App;
