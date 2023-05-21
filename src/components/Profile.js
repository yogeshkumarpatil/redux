import React from 'react'
import {useSelector} from 'react-redux'

function Profile() {

 const {name, age, status } = useSelector((state) => {
    return state
  })

  return (
    <div>
      <h1>I am profile component</h1>
      <h2>i am  = {name} </h2>
      <h2>My age is = {age} </h2>
      <h2>i am a = {status} </h2>
    </div>
  )
}

export default Profile
