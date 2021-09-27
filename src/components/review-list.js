import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {
    render () {
        let reviewOne = {
            content: 'This is one review',
            username: 'Jimmy13'
        };
        let reviewTwo = {
            content: 'This is another review',
            username: 'Tammy15'
        };
        let reviewThree = {
            content: 'This is one more review',
            username: 'Sandy19'
        };
        return (
            <div>
                <Review {...reviewOne}/>
                <Review {...reviewTwo}/>
                <Review {...reviewThree}/>
            </div>
        );
    }
}