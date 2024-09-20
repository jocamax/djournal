import React from "react"
import "./navbarMobile.scss"
import { AiOutlinePlus } from "react-icons/ai"
import { MdPublic, MdAccountCircle } from "react-icons/md"
import { AiFillHome } from "react-icons/ai"
import { AiFillSetting } from "react-icons/ai"
import { IoStatsChartSharp } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"
import { VscThreeBars } from "react-icons/vsc"
import { useState } from "react"
import Drawer from "../drawer/Drawer"

const NavbarMobile = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div className='navMobileContainer'>
      <Drawer opened={opened} onClose={() => setOpened(false)} title='More' />
      <div className='navItems'>
        <NavLink
          exact='true'
          to='/'
          className='navItem'
          activeclassname='activeNavItem navItem'
        >
          <AiFillHome className='navIcon' />
        </NavLink>
        {/* <NavLink
          exact='true'
          to='/getStarted'
          className='navItem'
          activeclassname='activeNavItem navItem'
        >
          <IoStatsChartSharp className='navIcon' />
        </NavLink> */}
        <NavLink
          exact='true'
          to='/explore'
          className='navItem'
          activeclassname='activeNavItem navItem'
        >
          <MdPublic className='navIcon' />
        </NavLink>

        <Link to='/add' className='navAdd'>
          <AiOutlinePlus className='navIcon' />
        </Link>
        <NavLink
          exact='true'
          to='/account'
          className='navItem'
          activeclassname='activeNavItem navItem'
        >
          <MdAccountCircle className='navIcon' />
        </NavLink>

        <Link className='navItem' onClick={() => setOpened(true)}>
          <VscThreeBars className='navIcon' />
        </Link>
      </div>
    </div>
  )
}

export default NavbarMobile
