import Navbar from "@/app/_component/Home/navbar";
import Sidenav from "@/app/_component/mentee_dash/Sidenav";
import React from "react";

function dashboard() {
  return <div>
    <Navbar/>
    <div className='container mx-auto flex mt-6'>
      <Sidenav/> 
      <h1>DASHBOARD</h1>
    </div>
  </div>;
}

export default dashboard;
