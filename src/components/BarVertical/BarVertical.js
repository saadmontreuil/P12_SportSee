import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import styles from './BarVertical.module.css';

export default function BarVertical({ icons, text }) {
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
