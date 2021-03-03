import React from 'react'
import './Header.css'
import {useSelector} from 'react-redux';

import {selectUser} from '../features/userSlice'
function Header() {

    const user=useSelector(selectUser)
    return (
        <div className="header">

<div className="header_left">
    <h3>{user.name}</h3>
</div>

<div className="header_middle">
    <h1>Hi {user.username}</h1>
</div>

<div className="header_right">
    <h3> {user.email}</h3>
</div>



        </div>
    )
}

export default Header
