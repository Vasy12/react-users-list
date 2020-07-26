import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { USER_PROP } from '../PropTypes';
import styles from './SelectedUsersList.module.scss';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const SelectedUsersList = ({ users, setUsers, ...props }) => {
  const mapUser = user => {
    const { id, firstName, lastName } = user;
    const onClick = () =>
      void setUsers(
        users.set(users.indexOf(user), { ...user, isSelected: false })
      );

    return (
      <li key={id} className={styles.userListItem}>
        {`${firstName ?? ''} ${lastName ?? ''}`.trim()}
        <button className={styles.removeBtn} onClick={onClick}>
          <Icon path={mdiClose} size={'1em'} color={'white'} />
        </button>
      </li>
    );
  };

  return (
    <ul className={styles.usersList}>
      {users.filter(u => u.isSelected).map(mapUser)}
    </ul>
  );
};

SelectedUsersList.propTypes = {
  users: ImmutablePropTypes.listOf(USER_PROP).isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default SelectedUsersList;
