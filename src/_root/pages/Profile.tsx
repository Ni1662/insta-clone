import { useUserContext } from '@/context/AuthContext'
import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const {id} = useParams()
  const {user} =  useUserContext()
  

  return (
    <div>Profile</div>
  )
}

export default Profile