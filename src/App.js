import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';

function App() {
  let navigate = useNavigate()

  function handlesignup() {
    navigate("/signup")
  }
  function handlesignin() {
    navigate("/login")
  }

  return (
    <>
      <br />
      <br />
      <button style={{ background: 'blue' }} type="button" onClick={handlesignup} className="b">Signup</button>
      <br />
      <br />
      <button type="button" onClick={handlesignin} className="b">Signin</button>



      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>



    </>
  );
}

export default App;
