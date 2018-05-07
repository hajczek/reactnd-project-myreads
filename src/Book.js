import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
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
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <select tabIndex="0" ref={this.props.book.shelf} aria-label="Choose category for book" className="select-shelf" value={this.props.book.shelf} onChange={(event) => this.props.onChangeCategory(this.props.book, event.target.value)}>>        
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title" tabIndex="0">{this.props.book.title}</div>
            <div className="book-authors" tabIndex="0">{this.props.book.author}</div>
        </div>
        )
    }
}

export default Book