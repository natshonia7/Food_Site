import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu'
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

// import { Menu } from "@mui/material";
// import About from "./pages/About";
// import Contact from "./pages/Contact";






function App() {
  return (
    <div className="App">
     
        <Navbar />
     
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
     
        <Route path="/about"element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
          </Routes>
      <Footer />
      
    </div>
  );
}

export default App;