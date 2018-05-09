import React from 'react'
import Book from './Book'

function BookCategory (props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.categoryName}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map((book) => (
                <li key={book.id}>                        
                    <Book 
                        books = {props.books}
                        onChangeCategory={props.onChangeCategory}
                        book = {book}
                    />
                </li>
                ))}
            </ol>              
        </div>
    </div>  
   )
}

export default BookCategory