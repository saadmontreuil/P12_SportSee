import styles from './App.module.css';
import BarHorizontal from './components/BarHorizontal/BarHorizontal';
import BarVertical from './components/BarVertical/BarVertical';
import Profil from './pages/ProfilPage';

function App() {
  return (
    <div className={styles.App}>
      <BarHorizontal />
      <div className={styles.content}>
        <BarVertical />
        <Profil />
      </div>

    </div>
  );
}

export default App;
