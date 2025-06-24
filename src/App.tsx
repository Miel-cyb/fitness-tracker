
import './App.css'
import LandingPage from './pages/LandingPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUpPage from './pages/Authentication/SignUp'
import SignInPage from './pages/Authentication/SignIn'
import Dashboard from './pages/Authentication/Dashboard'
import ProtectedRoute from './pages/Authentication/ProtectedRoute'
import {UserProvider} from './components/sub-sections/UserContext'


function App() {
 
   return(
    <>
    <UserProvider>
      <Router>
        <Routes>
      <Route path="/" element={<LandingPage />} />
          <Route path='/sign-up' element={<SignUpPage/>}></Route>
          <Route path='/sign-in' element={<SignInPage/>}></Route>
          <Route path='/dashboard' element= { <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>}></Route>
        </Routes>
      </Router>
   </UserProvider>
    </>
   )
}

export default App
