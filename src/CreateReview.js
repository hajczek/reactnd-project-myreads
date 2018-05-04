import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class CreateReview extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true})
        // console.log(values)
        if(this.props.onCreateReview)
            this.props.onCreateReview
    }
    render() {
        return (
            
            <div>
                <h2>Add Review</h2>
                <Link className="close-create-review" to="/">Close</Link>
                <form onSubmit={this.handleSubmit} className="create=review-form">
                <textarea type="text" name="review" placeholder="Add review ..."></textarea>
                <button>Save</button>
            
                </form>
            
            </div>
        
        )
    }
}

export default CreateReview