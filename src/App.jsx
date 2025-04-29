
// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import { ThemeProvider } from "./context/ThemeContext";
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-[#e5e5e5] dark:bg-[#2d3748]">
        {/* Sidebar (Left, Fixed) */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content (Scrollable) */}
        <MainContent
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Navbar (Right, Fixed) */}
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
