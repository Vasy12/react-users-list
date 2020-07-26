import React from 'react';
import PropTypes from 'prop-types';
import { USER_PROP } from '../PropTypes';
import UserImage from '../UserImage';
import styles from './UserCard.module.scss';
import IconLink from '../IconLink';
import Icon from '@mdi/react';
import { mdiCheck, mdiClose } from '@mdi/js';
import classNames from 'classnames';

const UserCard = ({
  user,
  user: { firstName, lastName, contacts, isSelected },
  onRemove,
  onSelect,
  ...rest
}) => {
  return (
    <article
      className={classNames(styles.container, {
        [styles.selected]: isSelected,
      })}
    >
      <UserImage user={user} className={styles.userImage} />
      <div className={styles.fullName}>
        {`${firstName ?? ''} ${lastName ?? ''}`.trim()}
      </div>
      <ul className={styles.contactsContainer}>
        {contacts.map((c, i) => (
          <IconLink
            key={i}
            href={c}
            className={styles.contactLink}
            color={'#00a3b6'}
            size={'40px'}
          />
        ))}
      </ul>
      <div className={styles.cardControls}>
        <button
          onClick={onRemove}
          className={classNames(styles.cardBtn, styles.removeBtn)}
        >
          <Icon size={2} path={mdiClose} color="white" />
        </button>
        <button
          onClick={onSelect}
          className={classNames(styles.cardBtn, styles.checkBtn)}
        >
          <Icon size={2} path={mdiCheck} color="white" />
        </button>
      </div>
    </article>
  );
};

UserCard.propTypes = {
  user: USER_PROP.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default UserCard;
