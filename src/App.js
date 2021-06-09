import React from 'react'

import { fetchUser } from './resources/user'

import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './views/Auth/Auth'

const TOKEN = localStorage.getItem('TOKEN')
if (TOKEN) {
  sessionStorage.setItem('TOKEN', TOKEN)
}

function App() {

  const [ user, setUser ] = React.useState()
  const [ userPending, setUserPending ] = React.useState(true)

  const checkUser = async () => {
    setUserPending(true)
    try {
      const user = await fetchUser()
      setUser(user)
    } catch (error) {
      setUser(null)
    } finally {
      setUserPending(false)
    }
  }

  const signout = () => {
    sessionStorage.removeItem('TOKEN')
    localStorage.removeItem('TOKEN')
    location.reload()
  }

  React.useEffect(() => {
    checkUser()
  }, [])

  return (
    <>
      {userPending ? (
        <div>loading...</div>
      ) : user ? (
        <Switch>
          <Route exact path="/">home page</Route>
          <Redirect to="/" />
        </Switch>
      ) : (
        <Auth/>
      )}
    </>

  );
}

export default App;
