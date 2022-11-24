import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Students from "./components/student/Students";
import Educators from "./components/educator/Educators";
import NavBar from "./components/navigation/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/students" />} />
          <Route path="/students" element={<Students />} />
          <Route path="/educators" element={<Educators />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
