import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectCategory extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeCategory: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <select id="select-category" key={this.props.id} onChange={(event) => {this.props.onChangeCategory(event)}}>
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