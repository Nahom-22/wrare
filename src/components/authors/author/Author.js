import React from 'react'

import download from '../../../assets/profileImages/download.png'

import './author.css'

function Author(props) {
  return (
    <div className='author-container'>
        <div className='author-wrapper'>
            <img src={download} alt="profile" />
            <h3>{props.username}</h3>
            <h4>{`First Name: ${props.firstname}`}</h4>
            <h4>{`Last Name: ${props.lastname}`}</h4>
            <h4>{`DOB: ${props.DOB}`}</h4>
        </div>
    </div>
  )
}

export default Author