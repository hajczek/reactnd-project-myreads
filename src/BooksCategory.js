import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SelectCategory from './SelectCategory'
import CreateReview from './CreateReview'

class BooksCategory extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeCategory: PropTypes.func.isRequired
    }

    render() {        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.categoryName }</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books.map((book) => (
                <li kye={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select id="select-shelf" value={book.shelf} onChange={e => (this.props.changeCategory(book, e.target.value))}>>
        
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
                            <div className="book-shelf">{book.shelf}</div>
                            <div className="book-thumbnail">{book.thumbnail}</div>
                            <Link to="/create" className="create-review">Add Review</Link>
                        </div>
                    </li>
                    ))}
                </ol>              
            </div>
        </div>  
        )
    }
}

export default BooksCategory