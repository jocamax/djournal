import "./register.scss"
import "../login/login.scss"
import { HiMoon } from "react-icons/hi"
import { AiFillLock, AiOutlineLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { MdEmail } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      )
      navigate("/")
    } catch (error) {
      console.log(error)
      console.log("You already have an account")
    }
  }
  return (
    <div className='loginContainer'>
      <div className='text'>
        <div className='title'>
          <HiMoon className='loginIcon' />
          <h1>DJournal</h1>
        </div>
        <h2>Create account</h2>
      </div>
      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id='username'
            placeholder='Create username...'
          />
          <label htmlFor=''>
            <MdEmail /> Email
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            placeholder='Enter your email...'
          />
          <label htmlFor=''>
            <AiFillLock /> Password
          </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            placeholder='Make sure that password is secure'
          />
          <button className='btn-inline loginBtn'>Create Account</button>
        </form>
      </div>
      <div className='signUpInstead'>
        <p>or if you already have an account</p>
        <button className='btn-inline'>Log In</button>
      </div>
      <div className='backBtnMobile'>
        <Link to='/' className='back'>
          <AiOutlineLeft />
        </Link>
      </div>
    </div>
  )
}

export default Register
