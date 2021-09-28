import React from 'react';

export default class ReviewForm extends React.Component {
    render () {
        return (
        <form>
            <div className="card-body">
                <label>Write a Review</label>
                <input type="text" class="form-control" placeholder="Type here"/>
                <button className="btn btn-primary">
                            <label>Submit</label>
                </button>
            </div>
        </form>
        );
    }
}