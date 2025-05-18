import React from 'react';
import  UserDetail  from "../userProfile/components/userDetail/userDetail"
import  PostComponent  from "../../components/posts/post";
import {UserHeader }  from "../../components/userHeader/userHeader";
import "./userProfile.css";

export default function UserProfile() {
  return (
    <div className="profile-page">
      <UserHeader />
      <div className="profile-content">
        <UserDetail />
        <PostComponent />
      </div>
    </div>
  )
}


