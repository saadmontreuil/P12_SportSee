import React from 'react';
import styles from './Error.module.css';

/**
 * Renders a 404 error page.
 * @returns {JSX.Element} A component that displays the error message.
 */

function Error404Page() {
  return (
    <div className={styles.error}>
      <h1>ERROR 404</h1>
    </div>
  );
}

export default Error404Page;
