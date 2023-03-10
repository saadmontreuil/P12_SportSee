import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import getUser from '../../service/userRequest';
import Header from '../../components/Header/Header';
import Activity from '../../components/charts/Activity/Activity';
import styles from './Profil.module.css';
import SessionLineChart from '../../components/charts/Session/SessionLineChart';
import PerformanceRadarChart from '../../components/charts/Performance/PerformanceRadarChart';
import ScoreRadialBarChart from '../../components/charts/Score/ScoreRadialBarChart';
import Nutrition from '../../components/Nutrition/Nutrition';

/**

@function
@desc Profil component is used to display the dashboard for a user's profile page.
 It fetches the user data using the getUser method, which is called using useEffect hook
@returns {JSX.Element} - returns the JSX Element of the component
*/
function Profil() {
  const [dataUser, setDataUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSession, setUserAverageSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const { id } = useParams();
  const userId = +id;

  const NUTRIENTS = [
    {
      name: 'calorie', icon: 'mingcute:fire-fill', color: '#FF0000', type: 'Calories',
    },
    {
      name: 'protein', icon: 'mdi:chicken-leg', color: '#4ab8ff', rotate: 2, type: 'Proteins',
    },
    {
      name: 'carbohydrate', icon: 'fa6-solid:apple-whole', color: '#fdcc0c', type: 'Glucides',
    },
    {
      name: 'lipid', icon: 'fa-solid:hamburger', color: '#fd5181', type: 'Lipides',
    },
  ];
  /**
  The useEffect hook to fetch the data for the user when the component is mounted.
  */
  useEffect(() => {
    const fetchData = async () => {
      const userInfos = await getUser(userId);
      setDataUser(userInfos);

      const activity = await getUser(userId);
      setUserActivity(activity);

      const averageSession = await getUser(userId);
      setUserAverageSession(averageSession);

      const performance = await getUser(userId);
      setUserPerformance(performance);
    };
    fetchData();
  }, []);

  if (userId !== 12 && userId !== 18) {
    return <Navigate to="/404" />;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.dashboard}>
        <Header user={dataUser} />
        <div className={styles.dashboardContainer}>
          <Activity data={userActivity?.sessions} />
        </div>
        <div className={styles.session}>
          <SessionLineChart data={userAverageSession?.averageSessions} />
          <PerformanceRadarChart data={userPerformance?.data} />
          <ScoreRadialBarChart data={dataUser?.score} />
        </div>
      </div>
      <div className={styles.nutrition}>
        {NUTRIENTS.map((nutrient) => (
          <Nutrition key={nutrient.name} data={dataUser} nutRients={nutrient} />
        ))}
      </div>

    </div>
  );
}

export default Profil;
