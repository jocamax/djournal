import React from "react"
import "./getStarted.scss"
import img from "../../assets/getStartedImg.png"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom"

const GetStarted = () => {
  return (
    <div className='getStartedContainer'>
      <img src={img} alt='' />
      <div className='text'>
        <h2>Never forget your dreams again</h2>
        <p>
          Have you ever been frustrated about not remembering your dreams? You
          won't be anymore. We got you covered!
        </p>
      </div>
      <Link to='/login' className='btn-inline'>
        <p>Get Started</p>
        <AiOutlineArrowRight className='icon' />
      </Link>
    </div>
  )
}

export default GetStarted
