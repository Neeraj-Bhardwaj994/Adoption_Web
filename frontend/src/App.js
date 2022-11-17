import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Contactpage from "./Components/Contactpage/Contactpage";
import Pagenotfound from "./Components/Pagenotfound/Pagenotfound";
import Adminpage from "./Components/Adminpage/Adminpage";
import Adminauth from "./Components/Adminauth/Adminauth";

function App() {
  const [user, setLoggedUser] = useState({});

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/contact" element={<Contactpage />}></Route>
        <Route
          path="/admindashboard"
          element={
            user && user._id ? (
              <Adminpage />
            ) : (
              <Adminauth setLoggedUser={setLoggedUser} />
            )
          }
        ></Route>
        <Route
          path="/admincred"
          element={<Adminauth setLoggedUser={setLoggedUser} />}
        ></Route>

        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
