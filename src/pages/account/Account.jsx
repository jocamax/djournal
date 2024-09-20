import React from "react"
import "./account.scss"
import axios from "axios"

const Account = () => {
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/api/auth/logout")
      .then((res) => {
        console.log(res)
        localStorage.removeItem("currentUser")
        window.location.replace("/login")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='accountContainer'>
      <h2>My Account</h2>
      <div className='stats'>
        <div className='statsItem'>
          <h3>7</h3>
          <p>Dream Entries</p>
        </div>
        <div className='statsItem'>
          <h3>2</h3>
          <p>Lucid Dreams</p>
        </div>
        <div className='statsItem'>
          <h3>0</h3>
          <p>Public Posts</p>
        </div>
      </div>
      <div className='logout'>
        <button className='btn-outline' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Account
