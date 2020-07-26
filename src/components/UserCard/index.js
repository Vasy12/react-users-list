import React from 'react';
import PropTypes from 'prop-types';
import { USER_PROP } from '../PropTypes';
import UserImage from '../UserImage';
import styles from './UserCard.module.scss';
import IconLink from '../IconLink';
import Icon from '@mdi/react';
import { mdiCheck, mdiMinus } from '@mdi/js';
import classNames from 'classnames';

const UserCard = ({
  user,
  user: { firstName, lastName, contacts, isSelected },
  onRemove,
  onSelect,
}) => {
  const getIcon = path => <Icon path={path} size={2} color={'white'} />;

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
        {contacts.map((contact, index) => (
          <IconLink
            key={index}
            href={contact}
            className={styles.contactLink}
            color={'#00a3b6'}
            size={'3em'}
          />
        ))}
      </ul>
      <div className={styles.cardControls}>
        <button
          onClick={onRemove}
          className={classNames(styles.cardBtn, styles.removeBtn)}
        >
          {getIcon(mdiMinus)}
        </button>
        <button
          onClick={onSelect}
          className={classNames(styles.cardBtn, styles.checkBtn)}
        >
          {getIcon(mdiCheck)}
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
