import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stringToColor from 'string-to-color';
import { USER_PROP } from '../PropTypes';
import styles from './UserImage.module.scss';
import UserInitials from './UserInitials';

const UserImage = ({
	user,
	user: { id, firstName, lastName, profilePicture },
	className,
	style = {},
	...restProps
}) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.addEventListener('load', () => setIsLoaded(true));
		img.src = profilePicture;
	}, [profilePicture]);

	const wrapperStyle = useMemo(
		() => ({
			backgroundColor: stringToColor(`${id}${firstName}${lastName}`),
			...style,
		}),
		[id, firstName, lastName, style]
	);

	return (
		<div
			{...restProps}
			style={wrapperStyle}
			className={classNames(styles.imageWrapper, className)}
		>
			<UserInitials user={user} />
			{isLoaded && (
				<img src={profilePicture} alt={`${firstName} ${lastName}`} />
			)}
		</div>
	);
};

UserImage.propTypes = {
	user: USER_PROP.isRequired,
	className: PropTypes.string,
	style: PropTypes.object,
};

export default UserImage;
