import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import User from "./pages/Users";
import Error from "./pages/Error";
import { ErrorBoundary } from "./ErrorBoundary";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<User />} />
          <Route path="/error-test" element={<ErrorBoundary />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
     </AuthProvider>
  );
}

export default App;
