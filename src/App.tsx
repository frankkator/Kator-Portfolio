import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LoginPage from "./Components/login-signup/LoginPage"
import NavBar from "./Components/Overlay/NavBar"

import { ThemeProvider } from './Components/Overlay/Themecontext' 

function NavigationWrapper() {
  const location = useLocation(); 
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
         <>
                {!isLoginPage && <NavBar />}
                
                <Routes>
                       <Route path="/" element={<LoginPage />} />
                       <Route path="/home" element={<Home />} />
                </Routes>
         </>
  );
}

function App() {
  return (
    // Wrap the entire app architecture here
    <ThemeProvider>
      <BrowserRouter>
           <NavigationWrapper />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App


