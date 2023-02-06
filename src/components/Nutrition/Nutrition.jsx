import React from 'react';
import { Icon } from '@iconify/react';
import styles from './Nutrition.module.css';

export default function Nutrition({ data }) {
  return (
    <div className={styles.nutrition}>
      <div className={styles.tag}>
        <Icon icon="mingcute:fire-fill" color="red" />
        <div className={styles.tagText}>
          <span>{data?.calorie}kCal </span>
          <span className={styles.type}>Calories</span>
        </div>
      </div>

      <div className={styles.tag}>
        <Icon icon="mdi:chicken-leg" color="#4ab8ff" rotate={2} />
        <div className={styles.tagText}>
          <span>{data?.protein}g </span>
          <span className={styles.type}>Poteines</span>
        </div>
      </div>
      <div className={styles.tag}>
        <Icon icon="fa6-solid:apple-whole" color="#fdcc0c" />
        <div className={styles.tagText}>
          <span>{data?.carbohydrate}g </span>
          <span className={styles.type}>Glucides</span>
        </div>
      </div>
      <div className={styles.tag}>
        <Icon icon="fa-solid:hamburger" color="#fd5181" />
        <div className={styles.tagText}>
          <span>{data?.lipid}g </span>
          <span className={styles.type}>Lipides</span>
        </div>
      </div>
    </div>
  );
}
