import React from 'react'
import Read from './Read'
import WantToRead from './WantToRead'
import CurrentlyReading from './CurrentlyReading'
import SearchView from './SearchView'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {      
      books: [],   /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  }

componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
    })
}

changeCategory = (book) => {
    this.setState((state) => ({
        books: state.books.filter((b) => b.category !== book.category)
    }))
    
    // BooksAPI.change(book.category)
}



  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
            <div>
                <SearchView onChangeCategory={this.changeCategory} books={this.state.books} />
            </div>
        ) : (
            <div className="list-books">            
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                      <Read onChangeCategory={this.changeCategory} books={this.state.books} />
                      <WantToRead onChangeCategory={this.changeCategory} books={this.state.books} />
                      <CurrentlyReading onChangeCategory={this.changeCategory} books={this.state.books} />
                    </div>
                </div>
            </div>
        )}
            
             <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
      </div>
    )
  }
}

export default BooksApp
