
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About.jsx";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
