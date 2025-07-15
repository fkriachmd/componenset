import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Sidebar from "./components/Sidebar";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Icon = lazy(() => import("./pages/Icon"));
const Card = lazy(() => import("./pages/Card"));

// Preload components on app start
const preloadComponents = () => {
  const componentImports = [
    () => import("./pages/Home"),
    () => import("./pages/About"),
    () => import("./pages/Icon"),
    () => import("./pages/Card"),
  ];

  // Preload after a short delay to not block initial render
  setTimeout(() => {
    componentImports.forEach((importFn) => {
      importFn().catch(() => {
        // Ignore preload errors
      });
    });
  }, 100);
};

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
  </div>
);

function App() {
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div className="min-w-full h-screen bg-background text-text flex">
      <Sidebar />
      <main className="flex-1 p-4 pt-10 overflow-y-auto">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/component/icon" element={<Icon />} />
            <Route path="/component/card" element={<Card />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
