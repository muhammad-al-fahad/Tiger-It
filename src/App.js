import "./App.css";
import ConfirmPass from "./Components/ConfirmPass/ConfirmPass";
import FirstName from "./Components/FirstName/FirstName";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Navbar from "./Components/Navbar/Navbar";
import Personalinfo from "./Components/Personalinfo/Personalinfo";
import SignIn from "./Components/signin/SignIn";

function App() {
  return (
    <>
      <Navbar />
      {/* <SignIn /> */}
      <ForgetPassword />
      {/* <FirstName /> */}
      {/* <Personalinfo /> */}
      <ConfirmPass />
    </>
  );
}

export default App;
