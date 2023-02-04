import React, { useEffect, useState } from 'react';
import { getUserInfos, getUserActivity } from '../../service/userRequest';
import Header from '../../components/Header/Header';
import Activity from '../../components/charts/Activity/Activity';
import styles from './Profil.module.css';

export default function Profil() {
  const [dataUser, setDataUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userInfos = await getUserInfos(12);
      setDataUser(userInfos);
      const activity = await getUserActivity(12);
      setUserActivity(activity);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <Header user={dataUser} />
      <div className={styles.dashboardContainer}>
        <Activity data={userActivity?.sessions} />
      </div>
    </div>
  );
}
