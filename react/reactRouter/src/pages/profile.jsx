import React from 'react'
import { NavLink } from 'react-router-dom'

const Profile = () => {
    const profiles = [1,2,3,4,5]
    return(
        <div>
            <h1>Profile Page</h1>
            <div className='flex flex-col gap-2'>
            {profiles.map(profile => {
                return <NavLink to={`/profiles/${profile}`} key={profile}>Profile:{profile}</NavLink>
            })}
            </div>
        </div>
    )
}

export default Profile;
