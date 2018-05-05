import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BooksCategory from './BooksCategory'
import SearchView from './SearchView'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CreateReview from './CreateReview'

class BooksApp extends React.Component {
    state = {      
        books: [],
        screen: 'list'
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    /* changeCategory = (book) => {
        const newCategory = e.target.value
        const bookId = this.props.bookId
        
        BooksAPI.update(bookId, newCategory).then(
    	      response => console.log(response)
        ) 
    }*/
    
    /* createReview(review) {
        BooksAPI.create(review).then(review => {
            this.setState(state => ({
                books: state.books.concat([review])
            }))
        })
    } */

    render() {
        return (
            <div className="app">
                <div className="list-books">            
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">                   
                        <Route exact path="/" render={() => (
                            <div>
                                <BooksCategory
                                    categoryName = 'Read'
                                    books = {this.state.books.filter(book => book.shelf === "read")}
                                    onChangeCategory={this.changeCategory}
                                  />
                                <BooksCategory
                                    categoryName = 'Want to read'
                                    books = {this.state.books.filter(book => book.shelf === "wantToRead")}
                                    onChangeCategory={this.changeCategory} 
                                />
                                <BooksCategory
                                    categoryName = 'Currently Reading'
                                    books = {this.state.books.filter(book => book.shelf === "currentlyReading")}
                                    onChangeCategory={this.changeCategory}
                                />
                            </div>
                        )} />
                            
                        <Route path="/create" render={(history) => (
                            <div>
                                <CreateReview
                                    books={this.state.books}
                                    onCreateReview={(review) => {
                                        this.createReview(review)
                                        history.push('/')
                                    }}
                                  />
                            </div>
                        )} />    
                        
                        <Route path="/search" render={(history) => (
                            <div>
                                <SearchView
                                    books={this.state.books}
                                    onChangeCategory={() => {
                                        this.changeCategory
                                        //history.push('/')
                                    }}
                                  />
                            </div>
                        )} />
                     </div>
                    <div className="open-search">
                        <Link to="/search" className="search">Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
