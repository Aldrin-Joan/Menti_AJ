import UserProfilePage from "@/app/(auth)/user-profile/[[...user-profile]]/page";
import Navbar from "@/app/_component/Home/navbar";
import MenteeDashboard from "@/app/_component/mentee_dash/MenteeDashboard";
import Sidenav from "@/app/_component/mentee_dash/Sidenav";
import React from "react";

function dashboard() {
  return <div>
    <Navbar/>
    <div className='container mx-auto flex mt-6'>
      <Sidenav/> 
      {/* <MenteeDashboard/> */}
    <UserProfilePage />
    </div>
  </div>;
}

export default dashboard;
