import React from 'react'
import useUser from '../../hooks/useUser'

export default function Home() {

    const { data: dataUser } = useUser("18");
  return (
    <div>{dataUser.data.userInfos.firstName }</div>
  )
}
