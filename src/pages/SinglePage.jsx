
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import axios from "axios"
import React, { useEffect, useState } from "react"


function SinglePage() {
    const [book, setBook] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    // used to get the parameter of route ..
    const fetchSingleBook = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/books/${id}`);
            // console.log(response?.data);
            setBook((prev) => prev = response?.data)
        } catch (error) {
            setBook((prev) => prev = { error: "Book Not Found" })
            setBook(null)
            console.error('Error fetching book:', error);
        }
    };

    const deleteBook = async () => {
        const response = await axios.delete(`http://localhost:4000/api/books/${id}`)
        console.log(response?.data)
        setBook(null)
        navigate("/")
    }
    // console.log("state", book)
    useEffect(() => {
        fetchSingleBook()
    }, [])
    return (
        <React.Fragment>
            <Navbar />
            {book &&
                <span className="flex flex-col gap-4 justify-start items-start p-10 bg-gray-600 text-xl font-serif">
                    <h1>Book Name : {book.bookName}</h1>
                    <h1>Price : ${book.bookPrice}</h1>
                    <h1>Author : {book.bookAuthor}</h1>
                    <button className="bg-red-500 cursor-pointer px-4 py-2 rounded " onClick={deleteBook}>Delete</button>
                    <button className="bg-emerald-500 cursor-pointer px-4 py-2 rounded " onClick={() => navigate("/")}>Home</button>
                    <button className="bg-emerald-500 cursor-pointer px-4 py-2 rounded " onClick={() => navigate("/edit-page/" + id)}>Edit</button>
                </span>
            }
        </React.Fragment>
    )
}

export default SinglePage