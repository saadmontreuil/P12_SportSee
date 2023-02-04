import React, { useEffect, useState } from 'react';
import { getUserInfos, getUserActivity, getUserAverageSession } from '../../service/userRequest';
import Header from '../../components/Header/Header';
import Activity from '../../components/charts/Activity/Activity';
import styles from './Profil.module.css';
import SessionLineChart from '../../components/charts/Session/SessionLineChart';

export default function Profil() {
  const [dataUser, setDataUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSession, setUserAverageSession] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userInfos = await getUserInfos(12);
      setDataUser(userInfos);
      const activity = await getUserActivity(12);
      setUserActivity(activity);
      const averageSession = await getUserAverageSession(12);
      setUserAverageSession(averageSession);
    };
    fetchData();
  }, []);
  console.log(userActivity?.sessions);
  console.log(userAverageSession?.sessions);

  return (
    <div className={styles.dashboard}>
      <Header user={dataUser} />
      <div className={styles.dashboardContainer}>
        <Activity data={userActivity?.sessions} />
      </div>
      <div className={styles.session}>
        <SessionLineChart data={userAverageSession?.sessions} />
      </div>
    </div>
  );
}
