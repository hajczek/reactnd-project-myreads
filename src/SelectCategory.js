import React, { Component } from 'react'

function SelectCategory (props) {
    return (
        <select>
            <option value="none" disabled>Move to...</option>
            <option selected={() => props.onChangeCategory()} value="currentlyReading">Currently Reading</option>
            <option selected={() => props.onChangeCategory()} value="wantToRead">Want to Read</option>
            <option selected={() => props.onChangeCategory()} value="read">Read</option>
            <option selected={() => props.onChangeCategory()} value="none">None</option>
        </select>
    )
}

export default SelectCategory