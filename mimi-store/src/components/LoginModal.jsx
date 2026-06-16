import { useState } from 'react'

function LoginModal() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    console.log(email)
    console.log(password)

    // aquí llamarías a tu API
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Ingresar
      </button>

    </form>
  )
}

export default LoginModal