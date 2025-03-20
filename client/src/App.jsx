import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import ForgotPassword from "./pages/ForgotPassword/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} exact={true} element={<Home />} />
        <Route path={"/login"} exact={true} element={<Login />} />
        <Route path={"/signup"} exact={true} element={<Register />} />
        <Route
          path={"/forgot-password"}
          exact={true}
          element={<ForgotPassword />}
        />
      </Routes>
    </>
  );
};

export default App;
