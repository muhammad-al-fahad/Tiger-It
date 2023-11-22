import "./App.css";
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
      {/* <ForgetPassword /> */}
      {/* <FirstName /> */}
      <Personalinfo />
    </>
  );
}

export default App;
