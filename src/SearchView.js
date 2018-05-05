import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'

class SearchView extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
        changeCategory: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: [],
        book: {}
    }

    updateQuery = (query) => {
        this.setState({ query })
        BooksAPI.search(query, 30).then((books) => {
          this.setState({ books })
        })
    }

    render() {
        
        const { books, onChangeCategory } = this.props
        const { query } = this.state
        
        let showingBooks = [];
        if (query){
             const match = new RegExp(escapeRegExp(query))
             showingBooks = books.filter((book) => match.test(book.title || book.author))            
        } else {
            <div>Search book</div>
        }
        
        return (
            <div>
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                    {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.                                        */}
                    <input type='text' placeholder='Search books by title or author' value={query} ref={query} onChange={(event) => this.updateQuery(event.target.value)} />
                </div>
            </div>

            <div className="search-books-results">
                <div className="search-books">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                        <li kye={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select ref={book.shelf} id="select-shelf" value={book.shelf} onChange={(event) => this.props.onChangeCategory(book, event.target.value)}>>        
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
                                </div>
                            </li>
                        ))}
                      </ol>
                </div>
            </div>
        </div>
        )
    }
}

export default SearchView