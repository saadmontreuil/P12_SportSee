import styles from './App.module.css';
import BarHorizontal from './components/BarHorizontal/BarHorizontal';
import BarVertical from './components/BarVertical/BarVertical';
import Home from './components/Home/Home';

function App() {
  return (
    <div className={styles.App}>
      <BarHorizontal />
      <div className={styles.content}>
        <BarVertical />
        <Home />
      </div>

    </div>
  );
}

export default App;
