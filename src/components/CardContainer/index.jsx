import React from 'react'
import UserCard from '../UserCard'

import './CardContainer.css';
export default function CardContainer({users}) {
  

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
