import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import BarHorizontal from './components/BarHorizontal/BarHorizontal';
import BarVertical from './components/BarVertical/BarVertical';
import Profil from './pages/Profil/ProfilPage';
import HomePage from './pages/Home/HomePage';
import Error404Page from './pages/Error/Error404Page';

function App() {
  const ICONS = [
    { icon: 'mdi:meditation', color: 'red' },
    { icon: 'grommet-icons:swim', color: 'red' },
    { icon: 'material-symbols:directions-bike-rounded', color: 'red' },
    { icon: 'mdi:weights', color: 'red' },
  ];

  return (
    <div className={styles.App}>
      <BarHorizontal />
      <div className={styles.content}>
        <BarVertical icons={ICONS} text="Copyright, SportSee 2020" />
        <Routes>
          <Route path="/profil/:id" element={<Profil />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404Page />} />

        </Routes>
      </div>

    </div>
  );
}

export default App;
