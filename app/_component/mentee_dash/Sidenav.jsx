import React from 'react';
import Link from 'next/link';
import { BookCheck, BookOpen, GraduationCap, Home, Inbox, Projector, Users } from 'lucide-react';

function Sidenav() {
  const menu = [
    {
      id: 1,
      name: 'Home',
      icon: Home,
      href: '/mentee',
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: BookOpen,
      href: '/dashboard',
    },
    {
      id: 3,
      name: 'Lesson',
      icon: BookCheck,
      href: '/lesson',
    },
    {
      id: 4,
      name: 'Inbox',
      icon: Inbox,
      href: '/inbox',
    },
    {
      id: 5,
      name: 'Meeting',
      icon: Projector,
      href: '/meeting',
    },
    {
      id: 6,
      name: 'Group',
      icon: Users,
      href: '/group',
    },
    {
      id: 7,
      name: 'Mentor',
      icon: GraduationCap,
      href: '/mentor',
    }
  ];

  return (
    <div className='w-64 rounded-lg shadow-lg p-6 bg-[rgb(8,131,149)] mx-6'>
      {/* Menu Side */}
      <div>
        {menu.map((item) => (
          <Link key={item.id} href={item.href} passHref>
            <div 
              className='group flex gap-3 mt-2 p-3 text-[18px] items-center text-[rgb(235,244,246)] cursor-pointer rounded-md 
                transition-all duration-300 ease-in-out 
                hover:bg-gradient-to-r from-[rgb(7,25,82)] to-[rgb(55,183,195)]
                hover:text-white hover:shadow-lg'
            >
              <item.icon 
                className='transition-transform duration-300 ease-in-out group-hover:animate-bounce 
                text-[rgb(235,244,246)] group-hover:text-white'
              />
              <h2 className='relative transition-all duration-350 ease-in-out'>
                {item.name}
                <span className='absolute left-0 -bottom-1 h-0.5 w-full bg-[rgb(235,244,246)] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100' />
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidenav;
