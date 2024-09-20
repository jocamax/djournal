import React from "react"
import { useState } from "react"
import { Drawer as MantineDrawer } from "@mantine/core"
import { AiFillHome } from "react-icons/ai"
import { MdPublic, MdAccountCircle } from "react-icons/md"
import { AiFillSetting } from "react-icons/ai"
import { IoStatsChartSharp } from "react-icons/io5"
import { FaBlog } from "react-icons/fa"
import { GiDreamCatcher } from "react-icons/gi"
import { BsFillFileTextFill } from "react-icons/bs"

import "./drawer.scss"
import { NavLink } from "react-router-dom"

const Drawer = ({ opened, onClose, setOpened }) => {
  return (
    <MantineDrawer
      opened={opened}
      onClose={onClose}
      title='More'
      size='xs'
      className='drawer'
      style={{ bg: "red" }}
    >
      <div className='drawerItems'>
        <NavLink className='drawerItem'>
          <AiFillHome className='drawerIcon' />
          <p>Home</p>
        </NavLink>
        <NavLink
          to='/explore'
          className='drawerItem'
          onClick={() => setOpened(false)}
        >
          <MdPublic className='drawerIcon' />
          <p>Explore</p>
        </NavLink>
        <NavLink className='drawerItem'>
          <IoStatsChartSharp className='drawerIcon' />
          <p>Stats</p>
        </NavLink>
        <NavLink className='drawerItem'>
          <AiFillSetting className='drawerIcon' />
          <p>Settings</p>
        </NavLink>
        <NavLink className='drawerItem'>
          <MdAccountCircle className='drawerIcon' />
          <p>My Account</p>
        </NavLink>
      </div>
      <div className='drawerItems'>
        <h3>Additional</h3>
        <div className='drawerItem'>
          <BsFillFileTextFill className='drawerIcon' />
          <p>Lucid Dream Techniques</p>
        </div>
        <div className='drawerItem'>
          <GiDreamCatcher className='drawerIcon' />
          <p>Reality Checks</p>
        </div>
        <div className='drawerItem'>
          <FaBlog className='drawerIcon' />
          <p>Blog</p>
        </div>
      </div>
    </MantineDrawer>
  )
}

export default Drawer
