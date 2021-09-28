import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            content: props.content
        };
    }
    render () {
        let comments = [];
        if (this.state.reviews){
            for (let review of this.state.reviews){
                comments.push(<Review {...review} />)
            }
        }
        return (
            <div className="card">
                <div className="card-body">
                    {this.props.username}
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="class-footer">
                    {comments}
                </div>
            </div>
        );
    }
}
