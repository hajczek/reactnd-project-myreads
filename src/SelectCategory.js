import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectCategory extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeCategory: PropTypes.func.isRequired
    }

  render () {
    return (
            <select id="select-shelf" value={this.props.book.shelf} onChange={e => (this.props.changeCategory(this.props.book, e.target.value))}>>
        
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