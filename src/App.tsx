import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wishes from "./pages/Wishes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/birthday" element={<Wishes />} />
    </Routes>
  );
}

export default App;