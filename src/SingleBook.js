import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreateReview from './CreateReview'

function SingleBook (props) {
  return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193 }}></div>
                <div className="book-shelf-changer">
                    <select ref={props.book.shelf} id="select-shelf" value={props.book.shelf} onChange={(event) => props.onChangeCategory(props.book, event.target.value)}>    
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.author}</div>
            <div className="book-shelf">{props.book.shelf}</div>
            <Link to="/create" className="create-review">Add Review</Link>
        </div>
    )
}

export default SingleBook