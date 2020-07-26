import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { USER_PROP } from '../PropTypes';
import styles from './UsersList.module.scss';
import UserCard from '../UserCard';

const UsersList = ({ users, setUsers }) => {
  const mapUser = (user, index) => {
    const onRemove = () => void setUsers(users.delete(index));
    const onDelete = () =>
      void setUsers(
        users.set(index, {
          ...user,
          isSelected: !user.isSelected,
        })
      );

    return (
      <li key={user.id} className={styles.listItem}>
        <UserCard onRemove={onRemove} onSelect={onDelete} user={user} />
      </li>
    );
  };

  return <ul className={styles.container}>{users.map(mapUser)}</ul>;
};

UsersList.propTypes = {
  users: ImmutablePropTypes.listOf(USER_PROP),
  setUsers: PropTypes.func.isRequired,
};
UsersList.defaultProps = { users: [] };

export default UsersList;
