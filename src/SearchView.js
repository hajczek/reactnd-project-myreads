import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchView extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query })
        BooksAPI.search(query, 30).then((books) => {
          this.setState({ books })
        })
    }

    render() {
        
        const { books } = this.props
        const { query } = this.state
        
        let showingBooks = [];
        if (query){
             const match = new RegExp(escapeRegExp(query), 'i')
             showingBooks = books.filter((book) => match.test(book.title))            
        } else {
            showingBooks = books
        }
        
        showingBooks.sort(sortBy('title'))
        
        return (
            <div>
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <form>
                        <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
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