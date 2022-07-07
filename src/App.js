import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom'; 
import Signup from './component/Signup';

function App() {


  return (
    <>
     <Signup/>

    </>
  );
}

export default App;
