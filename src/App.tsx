import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./Components/Overlay/NavBar"
import { ThemeProvider } from './Components/Overlay/Themecontext' 

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* The NavBar sits right here so it displays globally on every single page view */}
        <NavBar />
        
        <Routes>
          {/* Changed the root path "/" directly to your Home element, bypassing the Login layout completely */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}



