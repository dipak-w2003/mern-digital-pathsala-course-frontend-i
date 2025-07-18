import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"



function Form({ type }) {
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
    console.log(type)
    return (
        <>
            <Navbar />
            <div className="bg-white border border-4 rounded-lg shadow relative m-10">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        {type === "create-page" ? "Create Page" : "Edit Page"}
                    </h3>
                    <button onClick={() => navigate("/")} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <form onSubmit={submitData}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Book Name</label>
                                <input type="text" onChange={handleChange} name="bookName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Rich dad poor dad”" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Book Genre</label>
                                <input onChange={handleChange} type="text" name="bookGenre" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Fictional" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Book Author</label>
                                <input onChange={handleChange} type="text" name="bookAuthor" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Robert T. Kiyosaki" required />
                            </div>
                        <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                <input onChange={handleChange} type="number" name="bookPrice" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required />
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-200 rounded-b">
                            <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" >{type === "create-page" ? "Add Book" : "Update Book"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}
export default Form