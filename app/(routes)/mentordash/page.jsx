import Navbar from '@/app/_component/Home/navbar'
import React from 'react'
import Maincontent from '@/app/_component/mentee_dash/Maincontent'
import Calendar from '@/app/_component/mentee_dash/Calendar'
import MentorSideNav from '@/app/_component/Mentor_dash/MentorSideNav'

function page() {
  return (
    <div className=''>
      <Navbar/>
      <div className='container mx-auto flex mt-6'>
        <MentorSideNav/>
        <Maincontent/>
        <Calendar/>
      </div>
    </div>
  )
}

export default page