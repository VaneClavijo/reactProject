
import React, { useEffect, useState } from 'react'

//import other components
import UserList from './UserLIst'
import useHttp from '../../hooks/use-http'

const User = () => {

    const [users, setUsers] = useState([]);

    const getDataUsers = (users) => {
        setUsers(users);
    }

    const { error, isLoading, sendRequest: sendRequestUsers } = useHttp();



    return (
        <>
            < h2 style={{ marginTop : 20 }}> Usuarios </h2>
            <UserList users={users} />
        </>
    )
}

export default User;