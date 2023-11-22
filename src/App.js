<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
    </>
=======
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Validation from './components/Validation' 

function App() {
  return (
    <Router >
      <Routes >
        <Route path="/validation" element={<Validation /> } />
      </Routes>
    </Router>
>>>>>>> auth-by-maf12
  );
}

export default App;
