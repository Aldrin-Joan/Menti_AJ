"use client";
import Navbar from '@/app/_component/Home/Navbar';
import Testingcalender from '@/app/_component/testingcomp/testingcalender'
import React from 'react'
function page() {
  return (
    <div>
        <Navbar/>
        <div>
          <Testingcalender/>
        </div>
    </div>
  )
}

export default page