"use client";

import React from 'react';
import Navbar from '@/app/_component/Home/Navbar';
import MentorSidenav from '@/app/_component/mentor_dash/MentorSidenav';
import Maincontent from '@/app/_component/mentor_dash/Maincontent';
import CourseAnalytics from '@/app/_component/courseanalytics/CourseAnalytics';

function Page() {
  return (
    <div className="flex flex-col h-screen"> 
      <Navbar/>      
      <div className="flex flex-1 overflow-hidden mt-4"> 
        <MentorSidenav className="w-1/4" /> 
        
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col min-h-full space-y-4"> 
            
            <div className="flex-1 overflow-auto mb-6"> 
              <Maincontent />
            </div>
            
            <div className="flex-1 overflow-auto"> 
              <CourseAnalytics />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
