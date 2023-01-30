import React from 'react'
import useUser from '../../hooks/useUser'
import Header from '../Header/Header';
import styles from './Home.module.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


export default function Home() {
  const location = useLocation();
  const [active, setActive] = useState("12");

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === '/18') {
      setActive('18');

    } else if (pathname === '/12') {
      setActive('12');

    }else{

    }
  }, [location]);

    const { data: dataUser } = useUser(active);
  return (
    
    <div className={styles.home} >
      <Header user={dataUser?.data?.userInfos} />
    </div>
  )
}
