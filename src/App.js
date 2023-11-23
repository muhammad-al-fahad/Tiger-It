import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Validation from "./Components/Validation/Validation";
import Message from "./Components/Message/Message";
import Welcome from "./Components/Welcome/welcome";
import ConfirmPass from "./Components/ConfirmPass/ConfirmPass";
import FirstName from "./Components/FirstName/FirstName";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Navbar from "./Components/Navbar/Navbar";
import Personalinfo from "./Components/Personalinfo/Personalinfo";
import SignIn from "./Components/signin/SignIn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup/firstname" element={<FirstName />} />
          <Route path="/signup/confirmpassword" element={<ConfirmPass />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin/info" element={<Personalinfo />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />

          {/* 
            <Route path="/validation" element={<Validation />} />
            <Route path="/validation/message" element={<Message />} />
          */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
