import React from 'react';

export default class ReviewForm extends React.Component {
    render () {
        return (
            <form>
            <div class="form-group">
                <label>Write a Review</label>
                <input type="text" class="form-control" placeholder="Type here"/>
            </div>
        </form>
        );
    }
}