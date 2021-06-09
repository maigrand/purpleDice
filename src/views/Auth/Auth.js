import React from 'react'

import { signin } from '../../resources/user'

function Auth() {

  const [ submitError, setSubmitError ] = React.useState(null)
  const [ submitPending, setSubmitPending ] = React.useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setSubmitError(null)
    setSubmitPending(true)
    const formData = new FormData(event.target)
    try {
      const { token } = await signin(formData.get('email'), formData.get('password'))
      sessionStorage.setItem('TOKEN', token)
      if (true) { // REMEMBER
        localStorage.setItem('TOKEN', token)
      }
      setSubmitError(null)
      setSubmitPending(false)
      location.reload()
    } catch (error) {
      setSubmitError(error)
      setSubmitPending(false)
    }
  }

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full bg-gray-800"
    >
      <div
        className="flex flex-col justify-center items-center p-9 w-11/12 h-5/6 rounded-3xl bg-gray-900"
      >
        {submitError && (
          <div>{submitError.message}</div>
        )}
        <div>
          <span className="decoration-clone bg-gradient-to-b from-coral to-orchid bg-clip-text text-9xl font-black text-transparent mb-28">
            DICE
          </span>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" value="true"/>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    className="Input Input_autofill rounded-t-md"
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email address"
                    disabled={submitPending}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="Input Input_autofill rounded-b-md"
                    placeholder="Password"
                    disabled={submitPending}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orchid hover:bg-orchid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral"
                  disabled={submitPending}
                >
                  Sign in
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
