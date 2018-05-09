import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Book extends Component {
    
    render() {
        
        function displayBlock (){
           style.display = "none"; 
        }
        
        const {book, onChangeCategory} = this.props        
        
        return (
            <div className="book">
                <div className="book-top">
                {book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>}
                <div className="book-shelf-changer">
                    <select tabIndex="0" ref={book.shelf} aria-label="Choose category for book" className="select-shelf" value={book.shelf} onChange={(event) => onChangeCategory(book, event.target.value)}>>        
                        <option value="test">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
          {book.title && <div className="book-title" tabIndex="0">{book.title}</div>}
          {book.authors && <div className="book-authors" tabIndex="0">{book.authors}</div>}
          <p id="details" onClick={displayBlock}>More details »</p>
            <div className="book">
                {book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>}
                {book.title && <div className="book-title" tabIndex="0">{book.title}</div>}
                {book.authors && <div className="book-authors" tabIndex="0">{book.authors}</div>}                
                {book.pageCount && <div className="book-pageCount" tabIndex="0">Page count: {book.pageCount}</div>}
                {book.description && <div className="book-pageCount" tabIndex="0">Description: {book.description}</div>}
            </div>

        </div>
        )
    }
}

export default Book