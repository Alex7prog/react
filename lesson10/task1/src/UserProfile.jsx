import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { userData } = this.props;

    if (!userData) {
      return null;
    }

    const { avatar_url, name, location } = userData;

    return (
      <div className="user">
        <img className="user__avatar" alt="User Avatar" src={avatar_url} />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;
