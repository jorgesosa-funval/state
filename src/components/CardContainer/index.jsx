import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'

import './CardContainer.css';
export default function CardContainer() {
    const [users, setUsers] = useState([]);
    const [clicked, setClicked] = useState(false);
    
    async function getData() {
        const data = await fetch('users.json');
        const jsonData = await data.json();
        setUsers(jsonData);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <ul className='card_conatiner'>
            {users && users.map(user =>

                <UserCard
                    key={user.id}
                    avatar={user.avatar}
                    name={user.name}
                    role={user.role}
                    email={user.email}

                />

            )}
        </ul>

    )
}
