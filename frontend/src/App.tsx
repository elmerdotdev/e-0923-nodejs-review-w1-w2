import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const App = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')

  // Check if user cookie exists
  useEffect(() => {
    const checkUserCookie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/users/check-logged-in`, {
          credentials: 'include'
        })
        const data = await response.json()
        if (response.ok) {
          setLoggedIn(data.loggedIn)
          setUsername(data.username)
        }
      } catch (err) {
        console.error(err)
      }
    }

    checkUserCookie()
  }, [])

  // Process login
  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch(`http://localhost:4000/users/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      })
      const data = await response.json()

      if (response.ok) {
        setLoggedIn(data.loggedIn)
        setUsername(data.username)
      } else {
        alert(data.message)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Process logout
  const handleLogout = async () => {
    const response = await fetch(`http://localhost:4000/users/logout`, {
      credentials: 'include'
    })
    const data = await response.json()
    setUsername(data.username)
    setLoggedIn(data.loggedIn)
  }

  // Process signup
  const handleSignup = async (username: string, password: string) => {
    try {
      const response = await fetch(`http://localhost:4000/users/signup`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      })
      const data = await response.json()

      if (response.ok) {
        setUsername(data.username)
        setLoggedIn(data.loggedIn)
      } else {
        alert(data.message)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={loggedIn} username={username} onLogout={handleLogout} />} />
        <Route path="/articles" element={loggedIn ? <Articles /> : <Navigate to="/login" />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Signup onSignup={handleSignup} />} />
      </Routes>
    </Router>
  )
}

export default App