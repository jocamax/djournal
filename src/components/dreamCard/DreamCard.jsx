import React from "react"
import "./dreamCard.scss"
import { Link } from "react-router-dom"
import { FaCircle } from "react-icons/fa"
import { formatDate } from "../../utils/formatDate"
import { AiFillLock } from "react-icons/ai"
import { MdPublic } from "react-icons/md"

const DreamCard = ({ dream }) => {
  const lucidityIcons = Array(5)
    .fill()
    .map((_, i) => (
      <FaCircle className={`${dream.lucidity > i ? "full" : "circle"}`} />
    ))

  const clarityIcons = Array(5)
    .fill()
    .map((_, i) => (
      <FaCircle className={`${dream.clarity > i ? "full" : "circle"}`} />
    ))
  return (
    <div className='dreamCardContainer'>
      <div className='info'>
        <div className='left'>
          <h4 className='title'>{dream.title}</h4>
          <div className='dreamStats'>
            <div className='statsContainer'>
              <div className={`lucidity`}>Lucidity {dream.lucidity}/5</div>
              <div className={`lucidityCircles`}>{lucidityIcons}</div>
            </div>
            <div className='statsContainer'>
              <div className={`lucidity`}>Clarity {dream.clarity}/5</div>
              <div className={`lucidityCircles`}>{clarityIcons}</div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='date'>{formatDate(dream.createdAt)}</div>
        </div>
      </div>
      <div className='text'>{dream.dream}</div>
      <div className='buttons'>
        <Link to={`/dream/${dream._id}`}>
          <button className='btn-outline'>Open</button>
        </Link>
      </div>
      {dream.isPublic ? (
        <div className='dreamBadge public'>
          <MdPublic className='lockIcon' />
          <p>Public</p>
        </div>
      ) : (
        <div className='dreamBadge private'>
          <AiFillLock className='lockIcon' />
          <p>Private</p>
        </div>
      )}
    </div>
  )
}

export default DreamCard
