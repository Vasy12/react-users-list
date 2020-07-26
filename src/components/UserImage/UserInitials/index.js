import React from 'react';
import { USER_PROP } from '../../PropTypes';

const UserInitials = ({ user: { firstName, lastName }, ...props }) => {
  const initials = `${firstName[0] ?? ''} ${lastName[0] ?? ''}`.trim();
  return <div {...props}>{initials}</div>;
};

UserInitials.propTypes = {
  user: USER_PROP.isRequired,
};

export default UserInitials;
