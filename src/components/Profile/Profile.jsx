import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './Profileinfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile;