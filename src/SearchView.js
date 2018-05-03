import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectCategory from './SelectCategory'

class SearchView extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeCategory: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {    
        return (
            <div>
             <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                  {JSON.stringify(this.state)}
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
                <div className="search-books">
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
</div>
        )
    }
}

export default SearchView