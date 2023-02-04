import styles from './Activity.module.css';

function CustomToolTip({ payload, active }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.text}>{`${payload[0].value}kg`}</p>
        <p className={styles.text}>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
}
export default CustomToolTip;
