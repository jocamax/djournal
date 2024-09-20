import React from "react"
import "./comment.scss"
import { formatDate } from "../../utils/formatDate"

export const Comment = ({ comment }) => {
  return (
    <div className='commentContainer'>
      <div className='commentTop'>
        <div className='grayishText'>{comment.username}</div>
        <div className='grayishText'>{formatDate(comment.createdAt)}</div>
      </div>

      <div className='commentText'>{comment.desc}</div>
    </div>
  )
}
