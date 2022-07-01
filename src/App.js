import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDR0s4w8qngurP7gVoUfX9yi1zGTkwo3EQ",
    authDomain: "auth-e8a73.firebaseapp.com",
    projectId: "auth-e8a73",
    storageBucket: "auth-e8a73.appspot.com",
    messagingSenderId: "374666364450",
    appId: "1:374666364450:web:cdacf5ce0dea25de752c7b",
    measurementId: "G-6M7YXXS60Z"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const register=()=>{
    var email= document.getElementById("email").value;
    var password=document.getElementById("password").value;
    console.log(email +" "+password)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user register successfully")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  }

 
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input  type="text" className="form-control" id="email" aria-describedby="emailHelp" />
          <div id="email" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        
        <button type="button"  onClick={register} className="b">Submit</button>
      </form>

    </>
  );
}

export default App;
