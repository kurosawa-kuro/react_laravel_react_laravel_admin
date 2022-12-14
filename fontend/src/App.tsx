import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from "./pages/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Setting from "./pages/auth/setting";
import Greeting from "./pages/greeting";
import About from "./pages/about";
import NoMatch from "./pages/noMatch";


function App() {

  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul style={{ "display": "flex" }}>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/register">Register</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/login">Login</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/setting">Setting</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/greeting">Greeting</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ "marginRight": "10px", "listStyle": "none" }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
