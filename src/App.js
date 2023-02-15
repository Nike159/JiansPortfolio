import './App.css';
import Home from './Routes.js/Home';
import About from './Routes.js/About';
import Skills from './Routes.js/Skills';
import Contact from './Routes.js/Contact';
import Projects from './Routes.js/Projects';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<About />}/>
        <Route path="/projects"element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
 
    </div>
  );
}

export default App;
