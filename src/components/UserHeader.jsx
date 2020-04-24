import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    // const user = this.props.users.find((user) => user.id === this.props.userId);
    const { user } = this.props;

    // on first load, there will not be a list of users, just an empty array
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// ownProps is a reference of the props that are about to be sent into the component
// do precalculation at the mapStateToProps level instead of passing a ton of data into the component
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
