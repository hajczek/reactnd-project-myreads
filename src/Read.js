import React, { Component } from 'react'
import SelectCategory from './SelectCategory'

function Read (props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {props.books.map((book) => (
            <li kye={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <SelectCategory />
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                    </div>
                </li>
                ))}
            </ol>
        </div>
    </div>  
    )
}

export default Read