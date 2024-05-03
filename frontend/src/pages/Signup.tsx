import { FormEvent, useState } from "react"

type Props = {
  onSignup: (username: string, password: string) => void
}

const Signup = ({ onSignup }: Props) => {
  const [inputUsername, setInputUsername] = useState<string>('')
  const [inputPassword, setInputPassword] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSignup(inputUsername, inputPassword)
  }

  return (
    <div>
      <h2>Create account</h2>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup