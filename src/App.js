import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects, Skills } from "./pages";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const [nightMode, setNightMode] = useState(false);
  return (
    <AppContext.Provider value={{ nightMode, setNightMode }}>
      <div className="flex flex-col">
        <Navbar />
        <div
          className={`${
            nightMode ? "bg-[#37474F]" : "bg-[#DEE4E7]"
          } p-5 mt-[6vh] min-h-[94vh] ${
            nightMode ? "text-white" : "text-black"
          } flex items-start overflow-x-hidden overflow-y-auto`}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
