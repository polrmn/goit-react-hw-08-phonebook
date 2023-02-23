import Contacts from "pages/Contacts/Contacts";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/Singup";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import SharedLayout from "./SharedLayout/SharedLayout";


const App = () => { 
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<SignUp />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={<Login />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;


