import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Family from "./pages/Family";

//-----HIGHEST POINT IN APPLICATION ----- HERE TO CREATE ROUTE PATHS FOR OTHER PAGES

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/family" element={<Family />} />
      </Routes>
    </div>
  );
}

export default App;
