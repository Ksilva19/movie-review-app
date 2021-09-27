import React from 'react';

export default class Review extends React.Component {
    render () {
        return (
            <div className="card">
                <div className="card-header bg-light text-primary">
                    {this.props.username}
                </div>
                <div className="card-body">
                    {this.props.content}
                </div>
            </div>
        );
    }
}