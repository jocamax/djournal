import "./login.scss"
import React from "react"
import { HiMoon } from "react-icons/hi"
import { AiFillLock, AiOutlineLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true, // this will save the cookie in the browser
        }
      )

      localStorage.setItem("currentUser", JSON.stringify(res.data))

      navigate("/")
    } catch (error) {
      console.log(error)
      console.log("Wrong username or password")
    }
  }
  return (
    <div className='loginContainer'>
      <div className='text'>
        <div className='title'>
          <HiMoon className='loginIcon' />
          <h1>DJournal</h1>
        </div>
        <p>Easy way for you to remember your dreams</p>
      </div>
      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id='username'
            required
            placeholder='Enter your username...'
          />
          <label htmlFor=''>
            {" "}
            <AiFillLock /> Password
          </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            required
            placeholder='Enter your password...'
          />
          <Link className='forgotPwd' to='/'>
            Forgot Password?
          </Link>
          <button type='submit' className='btn-inline loginBtn'>
            Login
          </button>
        </form>
      </div>
      <div className='signUpInstead'>
        <p>or</p>
        <Link to='/register' className='btn-inline'>
          Sign Up
        </Link>
      </div>
      <div className='backBtnMobile'>
        <Link to='/' className='back'>
          <AiOutlineLeft />
        </Link>
      </div>
    </div>
  )
}

export default Login
