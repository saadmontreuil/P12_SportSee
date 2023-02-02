import React, { useEffect, useState } from 'react';
// import useUser from '../../hooks/useUser';
import { getUserInfos } from '../../service/userRequest';
import Header from '../Header/Header';
// import Weights from '../Weights/Weights';
import styles from './Home.module.css';

// import getUserInfo from '../../service/userRequest';

export default function Home() {
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userInfos = await getUserInfos(12);
      setDataUser(userInfos);
    };
    fetchData();
  }, []);

  console.log(dataUser);

  return (
    <div className={styles.home}>
      <Header user={dataUser} />
      {/* <Weights data={dataActivity?.data?.sessions} /> */}
    </div>
  );
}
