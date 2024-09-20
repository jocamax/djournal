import React from "react"
import "./navbar.scss"
import { AiOutlinePlus } from "react-icons/ai"
import { MdPublic, MdAccountCircle } from "react-icons/md"
import { AiFillHome } from "react-icons/ai"
import { AiFillSetting } from "react-icons/ai"
import { IoStatsChartSharp } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navContainer'>
      <div className='navItems'>
        <div className='logo'>
          <h1>Dream Journal</h1>
        </div>
        <div className='items'>
          <NavLink
            exact='true'
            to='/'
            className='navItem'
            activeclassname='activeNavItem navItem'
          >
            <AiFillHome className='navIcon' />
            <p>Home</p>
          </NavLink>
          <NavLink
            exact='true'
            to='/getStarted'
            className='navItem'
            activeclassname='activeNavItem navItem'
          >
            <IoStatsChartSharp className='navIcon' />
            <p>Stats</p>
          </NavLink>

          <NavLink
            exact='true'
            to='/explore'
            className='navItem'
            activeclassname='activeNavItem navItem'
          >
            <MdPublic className='navIcon' />
            <p>Explore</p>
          </NavLink>
          <NavLink
            exact='true'
            to='/account'
            className='navItem'
            activeclassname='activeNavItem navItem'
          >
            <MdAccountCircle className='navIcon' />
            <p>My Profile</p>
          </NavLink>
          <Link to='/add' className='navItem'>
            <AiOutlinePlus className='navIcon' />
            <p>Add Dream</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
