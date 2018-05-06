import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksCategory extends Component {
    state = {
        books: [],
        book: {}
    }

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
                    <li key={book.id}>                        
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