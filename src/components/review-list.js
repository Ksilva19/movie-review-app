import React from 'react';
import Review from './review';
import ReviewForm from './review-form';

export default class ReviewList extends React.Component {
    render () {
        let reviews = [
            {
            content: 'This is one review',
            username: 'Jimmy13'
            },
            {
            content: 'This is another review',
            username: 'Tammy15'
            },
            {
            content: 'This is one more review',
            username: 'Sandy19'
            }
        ];
        return (
            <div className="card">
                <ReviewForm />
                <Review {...{reviews}}/>
                <Review {...{content: 'Here is another review', username: 'Gaby90'}}/>
            </div>
        );
    }
}