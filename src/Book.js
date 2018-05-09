import React, { Component } from 'react'
/* import PropTypes from 'prop-types' */

class Book extends Component {

    render() { 
        
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
        </div>
        )
    }
}

export default Book