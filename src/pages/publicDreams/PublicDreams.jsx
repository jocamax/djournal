import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import DreamCard from "../../components/dreamCard/DreamCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Loader } from "@mantine/core"

const PublicDreams = () => {
  const [status, setStatus] = useState("")
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("newest")
  const [input, setInput] = useState("")

  const navigate = useNavigate()

  // Usage

  const fetchData = async () => {
    setStatus("loading")

    try {
      const response = await axios.get(
        `http://localhost:3000/api/dreams/?search=${search}&sort=${sort}`,
        {
          withCredentials: true,
        }
      )
      setData(response.data)
      console.log(response.data)
      setStatus("success")
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(input)
    navigate(`/explore/?search=${input}`)
  }

  useEffect(() => {
    fetchData()
  }, [sort, search])

  return (
    <div className='homeContainer'>
      <div className='search'>
        <h2>Explore Public Dreams</h2>
        <form className='searchInput' onSubmit={handleSubmit}>
          <AiOutlineSearch className='searchIcon' onClick={handleSubmit} />
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <select
          id='sort'
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value='newest'>Newest</option>
          <option value='oldest'>Oldest</option>
          <option value=''>Popular</option>
        </select>
      </div>
      <div className='dreamEntries'>
        {status === "loading" && <Loader color='cyan' variant='dots' />}
        {status === "success" &&
          data.map((dream) => <DreamCard dream={dream} key={dream._id} />)}
      </div>
    </div>
  )
}

export default PublicDreams
