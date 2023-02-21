import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import styles from './BarVertical.module.css';

/**
 * BarVertical is a React component that displays a vertical bar with icons and text.
 * @param {Array} props.icons - An array of objects that
 * contain the icon and color for each icon to be displayed.
 * @param {string} props.text - The text to be displayed alongside the icons.
 * @returns {JSX.Element} - A React component that displays the vertical bar.
 */

function BarVertical({ icons }) {
  return (

    <div className={styles.icon} key={icons.icon}>
      <Icon icon={icons.icon} color={icons.color} />
    </div>

  );
}

BarVertical.defaultProps = {
  icons: [],
};

BarVertical.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

export default BarVertical;
