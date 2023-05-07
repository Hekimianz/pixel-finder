import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";

firebase.initializeApp({
  apiKey: "AIzaSyDYpnoo2a9BDgsK5KRZWc9heYNQJi_drzk",
  authDomain: "retrofinder-60392.firebaseapp.com",
  projectId: "retrofinder-60392",
  storageBucket: "retrofinder-60392.appspot.com",
  messagingSenderId: "124516766966",
  appId: "1:124516766966:web:ad9af9fb0eb2d4bc3708d7",
});

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Level1 />} />
        <Route path="/2" element={<Level2 />} />
      </Routes>
      <footer>
        Made by{" "}
        <a href="https://github.com/Hekimianz" target="_blank" rel="noreferrer">
          Aram Hekimian
        </a>{" "}
        || Images by{" "}
        <a
          href="https://chekavo.artstation.com/"
          target="_blank"
          rel="noreferrer"
        >
          Egor Klyuchnyk
        </a>
      </footer>
    </>
  );
}

export default App;
