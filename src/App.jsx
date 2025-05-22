import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import BookCard from './Components/UI/BookCard'

const App = () => {
  const [fetchedBooksAPI, setFetchedBooksAPI] = useState([])
  const fetchBooks = async () => {
    const reponse = await axios.get("http://localhost:4000/api/books")
    setFetchedBooksAPI(prev => prev = reponse?.data?.fetchedBooks)
  }
  console.log(fetchedBooksAPI)
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <main className="bg-black text-white h-[100vh] ">
      <header className='text-4xl text-center p-10'>Books</header>

      <section className='flex justify-center flex-wrap  gap-3'>
        {fetchedBooksAPI && fetchedBooksAPI.map((book) => {
          return <BookCard book={book} />
        })}
      </section>
    </main>
  )
}

export default App


/** @Contents Make Readme Documentation
 * 1. axios
 * 2. CORS (cross origin resource sharing) policy & Error
 * 3. SOP (Same Origin Policy) 
 */