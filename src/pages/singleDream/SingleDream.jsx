import React, { useEffect, useState } from "react"
import "./singleDream.scss"
import { FaCircle } from "react-icons/fa"
import { AiOutlineLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"
import { formatDate } from "../../utils/formatDate"
import { Loader } from "@mantine/core"
import { Comment } from "../../components/comment/Comment"
import { MdDelete } from "react-icons/md"

const SingleDream = () => {
  const [dream, setDream] = useState({})
  const [loading, setLoading] = useState()
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const [comment, setComment] = useState("")

  const lucidityIcons = Array(5)
    .fill()
    .map((_, i) => (
      <FaCircle
        key={i}
        className={`${dream.lucidity > i ? "full" : "circle"}`}
      />
    ))

  const clarityIcons = Array(5)
    .fill()
    .map((_, i) => (
      <FaCircle
        key={i}
        className={`${dream.clarity > i ? "full" : "circle"}`}
      />
    ))

  useEffect(() => {
    const fetchDream = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `http://localhost:3000/api/dreams/single/${id}`,
          {
            withCredentials: true,
          }
        )
        setLoading(false)
        setDream(response.data)
        return response.data
      } catch (error) {
        console.log(error)
      }
    }
    fetchDream()
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `http://localhost:3000/api/comments/${id}`,
          {
            withCredentials: true,
          }
        )
        setLoading(false)
        setComments(response.data)
        return response.data
      } catch (error) {
        console.log(error)
      }
    }
    fetchComments()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3000/api/comments/",
        {
          userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
          username: JSON.parse(localStorage.getItem("currentUser"))?.username,
          dreamId: id,
          desc: comment,
        },
        {
          withCredentials: true,
        }
      )
      console.log(response)
      setComment("")
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='singleDreamContainer'>
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
          <div>
            {dream.userId ===
              JSON.parse(localStorage.getItem("currentUser"))?._id && (
              <MdDelete
                className='delete'
                onClick={async () => {
                  try {
                    const response = await axios.delete(
                      `http://localhost:3000/api/dreams/${id}`,
                      {
                        withCredentials: true,
                      }
                    )
                    console.log(response)
                    window.location.replace("/")
                    return response.data
                  } catch (error) {
                    console.log(error)
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
      {loading && <Loader color='cyan' variant='dots' />}
      {!loading && (
        <div className='text'>
          <p>{dream.dream}</p>
        </div>
      )}
      <Link to='/' className='back'>
        <AiOutlineLeft />
      </Link>
      <h4 className='commentsTitle'>Comments</h4>
      <div className='commentForm'>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder='Add a comment'
            name='comment'
            id='comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type='submit'>Post</button>
        </form>
      </div>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      {comments.length === 0 && <p>No comments yet</p>}
    </div>
  )
}

export default SingleDream
