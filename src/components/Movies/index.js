import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addMovie, resetMovies } from "../../reducers/Movies/actions";
class Movies extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onAddMovie = () => {
    this.props.addMovie(this.state.value);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <h1>Hello Movies {this.props.username}</h1>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          name='value'
        />
        <button onClick={this.onAddMovie}>Submit</button>
        <button onClick={this.props.resetMovies}>Clear</button>
        {this.props.movies.length > 0 &&
          this.props.movies.map((movie, index) => {
            return <p key={index}>{movie}</p>;
          })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { username: state.users.username, movies: state.movies.movies };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movie => dispatch(addMovie(movie)),
    resetMovies: () => dispatch(resetMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
