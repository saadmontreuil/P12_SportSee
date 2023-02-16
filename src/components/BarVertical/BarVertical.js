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

function BarVertical({ icons, text }) {
  return (
    <div className={styles.verticalBar}>
      <div className={styles.navIcon}>
        {icons.map((iconData) => (
          <div className={styles.icon} key={iconData.icon}>
            <Icon icon={iconData.icon} color={iconData.color} />
          </div>
        ))}
      </div>
      <p className={styles.navText}>{text}</p>
    </div>
  );
}

BarVertical.defaultProps = {
  icons: [],
  text: '',
};

BarVertical.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
  text: PropTypes.string,
};

export default BarVertical;
