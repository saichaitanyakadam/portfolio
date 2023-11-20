import { useState } from "react";
import {Routes,Route} from "react-router-dom"
import {Home,About,Projects,Skills} from "./pages"
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import './App.css';

function App() {
  const [nightMode,setNightMode]=useState(false) 
  return (
    <AppContext.Provider value={{nightMode,setNightMode}}>

  
    <div className="flex flex-col">
      <Navbar />
      <div className={`${nightMode?"bg-[#000]":"bg-white"} p-5 mt-[6vh] min-h-[94vh] ${nightMode?"text-white":"text-black"} flex justify-center items-center overflow-x-hidden overflow-y-auto`}>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />}/>
          <Route  path="/skills" element={<Skills />}/>
          <Route  path="/projects" element={<Projects />}/>
      </Routes>

      </div>
      
    </div>
    </AppContext.Provider> 
  
  );
}

export default App;
