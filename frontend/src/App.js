import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Dasboard from "./components/dashboard";
import NotFound from "./components/notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound title="404 Not Found" />} />
        <Route path="/" element={<Home title="Homepage" />} />
        <Route path="/users" element={<Register title="Registrasi" description="Silahkan Registrasi" />} />
        <Route path="/login" element={<Login title="Login Page" description="Mini Absensi Apps" />} />
        <Route path="/dashboard" element={<Dasboard title="Dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
