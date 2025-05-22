const BookCard = ({ book }) => {
    return (
        <div className="max-w-sm rounded-2xl shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300 h-[200px] w-[250px] overflow-hidden">
            <div className="text-lg font-semibold text-gray-800 mb-2">{book.bookName}</div>
            <div className="text-sm text-gray-600 mb-1">Author: <span className="text-gray-800">{book.bookAuthor}</span></div>
            <div className="text-sm text-gray-600 mb-1">Genre: <span className="text-indigo-600">{book.bookGenre}</span></div>
            <div className="text-sm text-gray-600 mb-1">Price: <span className="text-green-700 font-bold">${book.bookPrice}</span></div>
            <div className="text-xs text-gray-400 mt-2">Created: {new Date(book.createdAt).toLocaleDateString()}</div>
        </div>
    );
};

export default BookCard;
