import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  getUserInfos, getUserActivity, getUserAverageSession, getUserPerformance,
} from '../../service/userRequest';
import Header from '../../components/Header/Header';
import Activity from '../../components/charts/Activity/Activity';
import styles from './Profil.module.css';
import SessionLineChart from '../../components/charts/Session/SessionLineChart';
import PerformanceRadarChart from '../../components/charts/Performance/PerformanceRadarChart';
import ScoreRadialBarChart from '../../components/charts/Score/ScoreRadialBarChart';
import Nutrition from '../../components/Nutrition/Nutrition';

export default function Profil() {
  const [dataUser, setDataUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSession, setUserAverageSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const { id } = useParams();
  const userId = +id;

  useEffect(() => {
    const fetchData = async () => {
      const userInfos = await getUserInfos(userId);
      setDataUser(userInfos);

      const activity = await getUserActivity(userId);
      setUserActivity(activity);

      const averageSession = await getUserAverageSession(userId);
      setUserAverageSession(averageSession);

      const performance = await getUserPerformance(userId);
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
          <SessionLineChart data={userAverageSession?.sessions} />
          <PerformanceRadarChart data={userPerformance?.data} />
          <ScoreRadialBarChart data={dataUser?.score} />
        </div>
      </div>
      <Nutrition data={dataUser} />
    </div>
  );
}
