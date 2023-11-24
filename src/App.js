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
import Otp from "./Components/Otp/Otp";
import TigerOtp from "./Components/TigerOtp/TigerOtp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup/firstname" element={<FirstName />} />
          <Route path="/signup/confirmpassword" element={<ConfirmPass />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/login/info" element={<Personalinfo />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/otp" element={<TigerOtp />} />
          
            <Route path="/check/email" element={<Validation />} />
            <Route path="/message" element={<Message />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
