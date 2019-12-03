import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {changeUsername} from "../../actions/Users";

class Users extends PureComponent {
  render() {
    return (
      <>
        <h1>Hello from Users {this.props.blavor}</h1>
        <input value={this.props.username} onChange={(e)=>this.props.updateUsername(e.target.value)}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { blavor: state.users.username };
};

const mapDispatchToProps = dispatch => {
  return { updateUsername: username => dispatch(changeUsername(username)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
