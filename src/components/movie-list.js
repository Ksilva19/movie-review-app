import React from 'react';
import Movie from './movie';


export default class MovieList extends React.Component {
    render() {
        return (
            <div className="container">
                <Movie />
            </div>
        );

    }
}