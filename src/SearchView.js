import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchView extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({query})
        if(query){
            BooksAPI.search(query, 20).then((books) => {
            this.setState({books})})
            const match = new RegExp(escapeRegExp(query))
            this.state.books.filter((book) => match.test(book.title) || match.test(book.title))
        } else {
            this.setState({books: []});
        }
    }
    
    render() {
        
        const {onChangeCategory} = this.props
        const {query, books} = this.state
        
        return (
            <div>
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <form>
                    <div className="search-books-input-wrapper">
                        <input type='text' placeholder='Search books by title or author' value={query} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </form>
            </div>
            {this.state.length!==0 && (
                <div className="search-books-results">
                    <div className="search-books">
                        <ol className="books-grid">
                            {this.state.books.map((book) => (  
                                <li key={book.id}>
                                    <Book 
                                        books = {books}
                                        onChangeCategory={onChangeCategory}
                                        book = {book}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                )}
                {( this.state.length===0 && this.state.query.length!==0 ) && (
                <div className="search-results">
                    {`No book found`}
                </div>
                )}
            </div>  

        )
    }
}

export default SearchView