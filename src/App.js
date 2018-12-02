import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

// import Chart from './chart';
// import Chart2 from './chart2';
//import Movie from './Movie';


const Chart = lazy(() => import('./chart'));
const Chart2 = lazy(() => import('./chart2'));
const Movie = lazy(() => import('./Movie'));



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=882cae32089e139f10fe61d34d67c9d4")
      .then((res) => {
        this.setState({ movies: res.data.results });
      });
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/chart">Chart 1</Link>
            </li>
            <li>
              <Link to="/chart2">Chart 2</Link>
            </li>

          </ul>
          <hr />


          <Suspense fallback={<div>Loading....</div>}>
            <Route exact path="/" component={() => <Movie movies={this.state.movies} />} />

            <Route path="/chart" component={Chart} />
            <Route path="/chart2" component={Chart2} />

          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
