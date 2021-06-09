import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './views/Auth/Auth'

function getUser() {
  const token = sessionStorage.getItem('TOKEN')
  return new Promise((resolve, reject) => {
    if (token) {
      resolve({ id:1, email:'oxiggy@oxiggy.com' })
    } else {
      reject(Error('401'))
    }
  })
}

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
      const user = await getUser()
      setUser(user)
    } catch (error) {
      setUser(null)
    } finally {
      setUserPending(false)
    }
  }

  const logout = () => {
    sessionStorage.removeItem('TOKEN')
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
