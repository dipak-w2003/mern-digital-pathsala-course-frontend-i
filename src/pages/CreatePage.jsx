import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Form from "../components/Form"



function CreatePage() {
  const navigate = useNavigate()
  const [bookData, setBookData] = useState({
    bookName: "",
    bookGenre: "",
    bookAuthor: "",
    bookPrice: ""
  })
  const handleChange = (event) => {
    let { name, value } = event.target
    setBookData({
      ...bookData,
      [name]: value
    })
  }

  const submitData = async (event) => {
    event.preventDefault();
    // axios auto data conversion to 'json'
    const response = await axios.post("http://localhost:4000/api/books", bookData)
    navigate("/")
  }

  return (<Form type="create-page" />)
}
export default CreatePage