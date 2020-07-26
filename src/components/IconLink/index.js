import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import {
  mdiFacebook,
  mdiInstagram,
  mdiTwitter,
  mdiTelegram,
  mdiLink,
} from '@mdi/js';
import classNames from 'classnames';

const ICON_PATHS = new Map([
  ['www.facebook.com', mdiFacebook],
  ['web.telegram.org', mdiTelegram],
  ['twitter.com', mdiTwitter],
  ['www.instagram.com', mdiInstagram],
]);

const IconLink = ({ href, className, title, ...props }) => {
  const { hostname } = new URL(href);
  const iconPath = ICON_PATHS.has(hostname)
    ? ICON_PATHS.get(hostname)
    : mdiLink;

  return (
    <a
      {...props}
      className={classNames(className)}
      href={href}
      target="_blank"
      title={title ?? href}
    >
      <Icon {...props} path={iconPath} />
    </a>
  );
};

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

IconLink.defaultProps = {
  size: 1,
  color: 'black',
};

export default IconLink;
