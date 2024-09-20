import React from "react"
import "./addDream.scss"
import { Slider, Rating } from "@mantine/core"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineLeft } from "react-icons/ai"
import { IoIosCreate } from "react-icons/io"
import { FaCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Switch } from "@mantine/core"

const AddDream = () => {
  const [lucidity, setLucidity] = useState(0)
  const [clarity, setClarity] = useState(0)
  const [title, setTitle] = useState("")
  const [dream, setDream] = useState("")
  const [checked, setChecked] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:3000/api/dreams/",
        {
          userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
          title: title,
          dream: dream,
          lucidity: lucidity,
          clarity: clarity,
          isPublic: checked,
        },
        {
          withCredentials: true,
        }
      )
      console.log(response)
      navigate("/")
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='addDreamContainer'>
      <h2>
        <IoIosCreate className='icon' />
        Make new dream entry
      </h2>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='dreamTitle'>Title</label>
        <input
          type='text'
          name='dreamTitle'
          id='dreamTitle'
          className='input'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='dreamText'>Story</label>
        <textarea
          name='dreamText'
          id='dreamText'
          className='inputTextArea'
          onChange={(e) => setDream(e.target.value)}
        ></textarea>
        <label htmlFor='lucidity'>Lucidity Rating</label>
        <Rating
          value={lucidity}
          onChange={setLucidity}
          fractions={1}
          emptySymbol={<FaCircle size='1rem' />}
          fullSymbol={<FaCircle size='1rem' color='#66c5b6' />}
        />
        <label htmlFor='lucidity'>Dream Clarity</label>
        <Rating
          value={clarity}
          onChange={setClarity}
          fractions={1}
          emptySymbol={<FaCircle size='1rem' />}
          fullSymbol={<FaCircle size='1rem' color='#66c5b6' />}
        />
        <Switch
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          label='I want my dream to be public'
          color='cyan'
          className='switch'
        />
        <button type='submit' className='btn-inline'>
          Save dream entry
        </button>
      </form>
      <Link to='/' className='back'>
        <AiOutlineLeft />
      </Link>
    </div>
  )
}

export default AddDream
