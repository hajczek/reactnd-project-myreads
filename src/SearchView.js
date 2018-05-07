import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'

class SearchView extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query })
        BooksAPI.search(query, 10).then((books) => {
          this.setState({books})
        })
    }
    
    render() {
        
        const {books} = this.props
        const {query} = this.state
 
        if (query){
            const match = new RegExp(escapeRegExp(query))
            books.filter((book) => match.test(book.title))
        }
        
        return (
            <div>
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <form>
                        <div className="search-books-input-wrapper">
                        <input type='text' placeholder='Search books by title or author' value={this.state.query} ref={query} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </form>
            </div>

            <div className="search-books-results">                
                <div className="search-books">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
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
        </div>
        )
    }
}

export default SearchView