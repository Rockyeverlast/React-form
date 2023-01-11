import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import "./App.css";
import SingUp from "./pages/SingUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="signup" element={<SingUp />} />
          <Route path="signin" element={<SignIn />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
