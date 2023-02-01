import React from 'react';
import { Icon } from '@iconify/react';
import styles from './BarVertical.module.css';

export default function BarVertical() {
  return (
    <div className={styles.verticalBar}>
      <div className={styles.navIcon}>
        <div className={styles.icon}>
          <Icon icon="mdi:meditation" color="red" />
        </div>
        <div className={styles.icon}>
          <Icon icon="grommet-icons:swim" color="red" />
        </div>
        <div className={styles.icon}>
          <Icon icon="material-symbols:directions-bike-rounded" color="red" />
        </div>
        <div className={styles.icon}>
          <Icon icon="mdi:weights" color="red" />
        </div>

      </div>
      <p className={styles.navText}>Copyright, SportSee 2020</p>
    </div>
  );
}
