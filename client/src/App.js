import React, { useState } from "react";
import { BrowserRouter as Router , Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";
import Topbar from "./components/topbar/Topbar";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home currentId={currentId} setCurrentId={setCurrentId}/>}/>
        <Route exact path="/profile/:username" element={<Profile setCurrentId={setCurrentId}/>}/>        
        {!user ? (
          <Route exact path="/auth" element={<Auth />}/>
        ) : (
          <Route exact path="/auth" element={<Navigate to="/" />}/>
        )}        
      </Routes>
    </Router>
  );
}

export default App;
