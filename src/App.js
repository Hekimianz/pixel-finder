import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Level1 from "./components/Level1";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Level1 />} />
      </Routes>
    </>
  );
}

export default App;
