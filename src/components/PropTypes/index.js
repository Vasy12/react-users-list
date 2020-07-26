import PropTypes from 'prop-types';

export const USER_PROP = PropTypes.shape({
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	profilePicture: PropTypes.string,
	contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
	birthday: PropTypes.string.isRequired,
	isMale: PropTypes.bool.isRequired,
	isDeleted: PropTypes.bool.isRequired,
	isSelected: PropTypes.bool.isRequired,
});
