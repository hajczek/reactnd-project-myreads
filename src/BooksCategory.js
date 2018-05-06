import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BooksCategory extends Component {
    state = {
        books: [],
        book: {}
    }

     static propTypes = {
        books: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
        changeCategory: PropTypes.func.isRequired
    }

/* 
<div className="book">
     <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
         <div className="book-shelf-changer">
              <select ref={book.shelf} aria-label="Choose category for book" className="select-shelf" value={book.shelf} onChange={(event) => this.props.onChangeCategory(book, event.target.value)}>>        
                   <option value="none" disabled>Move to...</option>
                   <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
               </select>
        </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.author}</div>
</div>
*/

    render() {        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.categoryName }</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                    <li kye={book.id}>
                        
                    <Book 
                        books = {this.props.books}
                        onChangeCategory={this.props.onChangeCategory}
                        book = {book}
                    />
            
                    </li>
                    ))}
                </ol>              
            </div>
        </div>  
        )
    }
}

export default BooksCategory