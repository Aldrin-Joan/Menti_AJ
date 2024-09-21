import React from 'react'
import Sidenav from '@/app/_component/mentee_dash/Sidenav'
import Calendar from '@/app/_component/mentee_dash/Calendar'
import Navbar from '@/app/_component/Home/Navbar'
import MenteeMaincontent from '@/app/_component/mentee_dash/MenteeMaincontent'

function page() {
  return (
    <div className=''>
      <Navbar/>
      <div className='container mx-auto flex mt-6'>
        <Sidenav/>
        <MenteeMaincontent/>
        <Calendar/>
      </div>
    </div>
  )
}

export default page