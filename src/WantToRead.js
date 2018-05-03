import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectCategory from './SelectCategory'

class WantToRead extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeCategory: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to read</h2>
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
                        </div>
                    </li>
                    ))}
                </ol>
            </div>
        </div>
        )
    }
}

export default WantToRead