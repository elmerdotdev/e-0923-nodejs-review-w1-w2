import { Link } from "react-router-dom"

type Props = {
  isLoggedIn: boolean,
  username: string,
  onLogout: () => void
}

const Home = ({ isLoggedIn, username, onLogout }: Props) => {
  return (
    <div>
      <h1>Hello {username}</h1>
      <p>This is the home page of the website.</p>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        {isLoggedIn ? (
          <>
            <button onClick={() => onLogout()}>Log out</button>
            <Link to="/articles">Articles</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign up</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Home