import React from 'react'
import './UserCard.css';
export default function UserCard({ avatar, name, role, email }) {

  return (
    <li className='card'>
      <div className='img_container'>
        <img src={avatar} alt="" />
      </div>

      <h3>Nombre: {name}</h3>
      <h3>Rol: {role}</h3>
      <h3>Email: {email}</h3>
    </li>
  )
}
