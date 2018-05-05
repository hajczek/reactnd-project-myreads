import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SelectCategory extends Component {
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

    changeCategory = (book, shelf) => {
        if (this.state.books) {
            BooksAPI.update(book,shelf).then(() => {
                book.shelf = shelf;
                this.setState(state => ({
                    books: state.books.filter(b => b.shelf !== book.shelf).concat([ book ])
                }))
            })
        }
    }

    render () {
                
        return (
                <select ref={this.book.shelf} id="select-shelf" value={this.book.shelf} onChange={(event) => this.changeCategory(this.book.shelf, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                 </select>
        )
    }
}

export default SelectCategory