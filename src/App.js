import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
// import { Achievement } from "./components/Achievement;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/achievement" element={<Achievement />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
