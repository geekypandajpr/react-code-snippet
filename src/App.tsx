import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './pages/common/Footer'
import Header from './pages/common/Header'
import Login from './pages/login'
import Routes from './Routes'
import { RootState } from './redux/common/reducers'
import { logout, setUser } from './redux/session/action'
import { load } from './redux/user/action'
import { BrowserRouter } from 'react-router-dom'

// session check must be out of React Lifecycle
const checkSession = () => {
  const token = localStorage.getItem('session-token')
  const exp = localStorage.getItem('session-exp')
  if (token && exp) { // user is logged in
    const curr = Date.now()
    const prev = parseInt(exp)
    // session expires after 15min (15 * 60 * 1000)
    if (prev > curr - (15 * 60 * 1000)) {
      return true
    }
  }
  return false
}

const App = () => {
  // TODO: check master data (users for now) to see if initial load is complete 
  const users = useSelector((state: RootState) => state.user.users)
  const session_user = useSelector((state: RootState) => state.session.user)
  const dispatch = useDispatch()

  // initial load retrieves master data
  useEffect(() => {
    dispatch(load()) // updates users & re-render
  }, [dispatch])

  useEffect(() => {
    // do not proceed if master data is not loaded
    if (!users) return
    if (!checkSession()) {
      dispatch(logout())
    } else if (!session_user) { // Redux.state is empty after page load
      const userJson = localStorage.getItem('session-user')
      if (userJson) {
        dispatch(setUser(JSON.parse(userJson))) // update state from localStorage in background
      } else {
        dispatch(logout())
      }
    }
    setInterval(() => {
      if (!checkSession()) dispatch(logout())
    }, 60 * 1000) // check frontend session every minute
  }, [users, session_user, dispatch])

  if (!users) return (
    <div>loading</div>
  )
  if (!session_user) return (
    <Login />
  )

  return (
    <div
      style={{ // it's singleton, so doesn't have to be class
        height:'100vh',
        display: 'grid',
        gridTemplateRows: '64px auto 64px'
      }}
      onClick={() => {
        if (!checkSession()) { // update exp by any click action
          dispatch(logout())
        } else {
          const curr = Date.now()
          localStorage.setItem('session-exp', curr.toString())
        }
      }}
    >
    <BrowserRouter>
      <Header />
      <main style={{overflow: 'auto'}}>
        <Routes />
      </main>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
