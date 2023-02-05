import styles from './Session.module.css';

export default function CustomTooltip({ payload }) {
  return (
    <div className={styles.CustomTooltip}>
      <p>{`${payload[0]?.value} `}min</p>
    </div>
  );
}
