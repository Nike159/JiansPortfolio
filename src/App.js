import './App.css';
import About from './Routes.js/About';
import Skills from './Routes.js/Skills';
import Contact from './Routes.js/Contact';
import Projects from './Routes.js/Projects';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about"element={<About />}/>
        <Route path="/projects"element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
