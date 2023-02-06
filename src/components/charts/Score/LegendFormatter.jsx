import styles from './Score.module.css';

export default function ContentLegend({ payload }) {
  if (payload && payload.length) {
    return (
      <div className={styles.legend}>
        <h2>{`${payload[0].value}%`}</h2>
        <span>de votre </span>
        <span>objectif</span>
      </div>
    );
  }
  return null;
}