import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import useActivity from '../../hooks/useActivity';
import Header from '../Header/Header';
import Weights from '../Weights/Weights';
import styles from './Home.module.css';

import getUserInfo from '../../service/userRequest';

export default function Home() {
  const location = useLocation();
  const [active, setActive] = useState('12');

  useEffect(() => {
    getUserInfo(12);

    const { pathname } = location;

    if (pathname === '/18') {
      setActive('18');
    } else if (pathname === '/12') {
      setActive('12');
    }
  }, [location]);

  const { data: dataUser } = useUser(active);
  const { data: dataActivity } = useActivity(active);
  console.log(dataActivity?.data?.sessions);

  return (
    <div className={styles.home}>
      <Header user={dataUser?.data?.userInfos} />
      <Weights data={dataActivity?.data?.sessions} />
    </div>
  );
}
