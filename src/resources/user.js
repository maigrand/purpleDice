export async function fetchUser() {
  const res = await fetch('/api/v2/user', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('TOKEN'),
    }
  })
  const payload = await res.json()
  if (res.ok) {
    return payload
  } else {
    throw payload
  }
}

export async function signin(email, password) {
  const res = await fetch('/api/v2/user/sign-in', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('TOKEN'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    })
  })
  const payload = await res.json()
  if (res.ok) {
    return payload
  } else {
    throw payload
  }
}