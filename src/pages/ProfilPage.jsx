import React, { useEffect, useState } from 'react';
import { getUserInfos } from '../service/userRequest';
import Header from '../components/Header/Header';
import Activity from '../components/Activity/Activity';

export default function Profil() {
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
    <div className="home">
      <Header user={dataUser} />
      {/* <Weights data={dataActivity?.data?.sessions} /> */}
    </div>
  );
}
