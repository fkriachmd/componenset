import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Icon from "./pages/Icon";
import Card from "./pages/Card";

function App() {
  return (
    <div className="min-w-full min-h-screen bg-background text-text flex">
      <Sidebar />
      <main className="flex-1 p-4 pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/component/icon" element={<Icon />} />
          <Route path="/component/card" element={<Card />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
