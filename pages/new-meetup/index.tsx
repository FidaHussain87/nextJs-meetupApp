import React from 'react'
import axios from 'axios'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
const NewMeetUpPage = () => {
  const router = useRouter()
  const addMeetUpHandler = async (data: string) => {
    const res = await axios.post('/api/new-meetup', data)
    if (res) {
      router.push('/')
    }
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUpPage
