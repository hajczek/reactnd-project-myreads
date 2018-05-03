import React from 'react'
import PropTypes from 'prop-types'

function SelectCategory (props) {
    return (
        <select id="select-category" onChange={() => props.onChangeCategory(props.book)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

export default SelectCategory