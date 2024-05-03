import { FormEvent, useState } from "react"

type Props = {
  onLogin: (username: string, password: string) => void
}

const Login = ({ onLogin }: Props) => {
  const [inputUsername, setInputUsername] = useState<string>('')
  const [inputPassword, setInputPassword] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onLogin(inputUsername, inputPassword)
  }

  return (
    <div>
      <h2>Please log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login