import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function Movie({movies}) {

    return (
        <ul>
            {
                movies.map((movie, i) => {
                    return (
                        <li>
                            <h4>{movie.title}</h4>
                            <img className="album-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width="250" height="250"></img>
                        </li>

                    )
                })
            }
        </ul>

    );
}

export default Movie;
