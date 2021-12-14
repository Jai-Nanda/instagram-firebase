import React, { useRef, useState, useHistory } from 'react';
import './SignUp.css';
import { useAuth } from '../contexts/AuthContext'
export const SignUp = () => {
     const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

    return (
        <>
           <div className="card">

      <div className="card-form">
        <h4>Create your account</h4>

          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
                            placeholder="Enter your email address"
                            ref={emailRef}
            />
          </div>

          <div className="form-item">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="full-name"
                  id="full-name"
                            ref={passwordRef}
            />
          </div>

          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
                  placeholder="Enter your password"
            />
          </div>

          <button type="submit">Create an account</button>
      </div>
    </div>
        </>
    );
}
    
export default SignUp;