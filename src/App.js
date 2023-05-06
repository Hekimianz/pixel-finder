import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
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
