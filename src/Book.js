import React, { Component } from 'react'

class Book extends Component {
    
    state = {      
        display: 'none'
    }

    handleClick = () => {
        this.setState({
          display: 'block'
        })
    }
    
    handleClick2 = () => {
        this.setState({
          display: 'none'
        })
    }
    
    render() {
                 
        function displayBlock (){
           // style.display = "none";
            console.log('done')
        }
        
        const {book, onChangeCategory} = this.props        
        
        return (
            <div>
            <div className="book">
                <div className="book-top">
                {book.imageLinks && <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>}
                <div className="book-shelf-changer">
                    <select tabIndex="0" ref={book.shelf} aria-label="Choose category for book" className="select-shelf" value={book.shelf} onChange={(event) => onChangeCategory(book, event.target.value)}>>        
                        <option value="test">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
          {book.title && <div className="book-title" tabIndex="0">{book.title}</div>}
          {book.authors && <div className="book-authors" tabIndex="0">{book.authors}</div>}
          <p className="details" onClick={this.handleClick}>More details »</p>
        </div>
        <div className="bookDetails" style={{display:this.state.display}}>
                {book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>}
                {book.title && <div className="book-title" tabIndex="0">{book.title}</div>}
                {book.authors && <div className="book-authors" tabIndex="0">{book.authors}</div>}                
                {book.pageCount && <div className="book-pageCount" tabIndex="0">Page count: {book.pageCount}</div>}
                {book.description && <div className="book-pageCount" tabIndex="0">Description: {book.description}</div>}
                <span className="close" onClick={this.handleClick2}>Close X</span>
            </div>
        </div>
        )
    }
}

export default Book