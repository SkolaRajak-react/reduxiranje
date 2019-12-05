import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changeUsername } from "../../actions/Users";
import { getUsers } from "../../reducers/Users/actions";
import { bindActionCreators } from "redux";
import axios from "axios";

class Users extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: false,
  //     error: "",
  //     users: []
  //   };
  // }

  async componentDidMount() {
    this.props.getUsers();
    // this.setState({ loading: true });
    // try {
    //   const response = await axios.get("http://localhost:8081/users");
    //   this.setState({ users: response.data });
    // } catch (error) {
    //   this.setState({ error: error.message });
    // }
    // this.setState({ loading: false });
  }

  renderUsers = () => {
    if (this.props.users.length === 0) {
      return <p>No users</p>;
    }

    return this.props.users.map(user => {
      return <p key={user}>{user}</p>;
    });
  };

  render() {
    if (this.props.loading) {
      return <h3>Loading...</h3>;
    }

    if (this.props.error) {
      return <h2>Oooppp {this.props.error}</h2>;
    }

    return (
      <>
        <h1>Hello from Users {this.props.blavor}</h1>
        <input
          value={this.props.username}
          onChange={e => this.props.updateUsername(e.target.value)}
        />
        {this.renderUsers()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    blavor: state.users.username,
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeUsername,
      getUsers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
