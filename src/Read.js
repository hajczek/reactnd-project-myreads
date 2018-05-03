import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SelectCategory from './SelectCategory'
import CreateReview from './CreateReview'

class Read extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeCategory: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books.map((book) => (
                <li kye={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <SelectCategory />
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.author}</div>
                            <Link to="/create"
                            className="create-review">Add Review</Link>
                        </div>
                    </li>
                    ))}
                </ol>              
            </div>
        </div>  
        )
    }
}

export default Read