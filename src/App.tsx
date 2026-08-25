import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LoginPage from "./Components/login-signup/LoginPage"
import NavBar from "./Components/Overlay/NavBar"

// 1. Create a helper component inside or outside to safely use React Router hooks
function NavigationWrapper() {
  const location = useLocation(); // Safe to use because it's inside <BrowserRouter>
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
         <>
                {/* Hide NavBar if on the Root/Login page */}
                {!isLoginPage && <NavBar />}
                
                <Routes>
                       {/* 2. Set the LoginPage as the primary base URL path */}
                       <Route path="/" element={<LoginPage />} />
                       
                       {/* 3. Move your main portfolio workspace to /home */}
                       <Route path="/home" element={<Home />} />
                </Routes>
         </>
  );
}

function App() {
  return (
    <BrowserRouter>
         <NavigationWrapper />
    </BrowserRouter>
  )
}

export default App

