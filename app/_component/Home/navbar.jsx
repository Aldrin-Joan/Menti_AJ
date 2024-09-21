"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

function Navbar({ setSearchQuery }) {
  const [isDropOpen, setDropOpen] = useState(false);
  const [isRoleDropdownOpen, setRoleDropdownOpen] = useState(false); // Dropdown state for Switch role
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  const dropRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setDropOpen(false);
      }
      if (roleRef.current && !roleRef.current.contains(event.target)) {
        setRoleDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const focushandeler = () => {
    if (pathname !== "/explore") {
      router.push("/explore");
    }
  };

  const handleRoleSelection = (role) => {
    if (role === "mentor") {
      router.push("/mentor-dashboard");
    } else if (role === "mentee") {
      router.push("/mentee");
    }
    setRoleDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="flex justify-between items-center px-5 py-2 border z-10 bg-gradient-to-r from-[rgb(7,25,82)] to-[rgb(55,183,195)]">
      <div className="text-white font-bold">MENTI</div>
      <div>
        <div className="border border-gray-300 rounded-md bg-[rgb(235,244,246)] px-3 py-2 justify-center items-center flex gap-3">
          <Search className="text-[rgb(7,25,82)]" />
          <input
            type="search"
            placeholder="Search..."
            className="outline-none border-0 w-96 h-9 bg-[rgb(235,244,246)] text-[rgb(7,25,82)]"
            onChange={handleSearchChange}
            onFocus={focushandeler}
          />
        </div>
      </div>
      <div>
        <div className="flex gap-6 items-center">
          <div className="relative" ref={dropRef}>
            <button
              className="px-6 py-1 rounded-md flex justify-center items-center gap-4 text-white bg-[rgb(8,131,149)] hover:bg-[rgb(7,25,82)] transition-all"
              id="dropdown-btn"
              onClick={() => setDropOpen(!isDropOpen)} // Toggle dropdown on click
            >
              Know More
              <ChevronDown />
            </button>
            {isDropOpen && (
              <ul
                className="mt-6 absolute left-0 border px-7 w-50 py-4 flex-col gap-8 rounded-md bg-[rgb(235,244,246)] z-10"
                id="dropdown-content"
              >
                <li className="hover:text-[rgb(8,131,149)] w-full cursor-pointer">
                  Who are we?
                </li>
                <li className="hover:text-[rgb(8,131,149)] w-full cursor-pointer mt-3">
                  Why we?
                </li>
                <li className="hover:text-[rgb(8,131,149)] w-full cursor-pointer mt-3">
                  Contact Us
                </li>
              </ul>
            )}
          </div>

          {/* Switch Role Dropdown */}
          <div className="relative" ref={roleRef}>
            <button
              className="px-3 py-1 bg-[rgb(7,25,82)] text-white rounded-md flex items-center gap-2 hover:bg-[rgb(8,131,149)] transition-all duration-200 ease-in-out"
              onClick={() => setRoleDropdownOpen(!isRoleDropdownOpen)} // Toggle dropdown on click
            >
              Switch Role
              <ChevronDown />
            </button>
            {isRoleDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-[rgb(235,244,246)] border rounded-md py-2 w-32 z-10">
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-[rgb(8,131,149)] hover:text-white"
                  onClick={() => handleRoleSelection("mentor")}
                >
                  Mentor
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-[rgb(8,131,149)] hover:text-white"
                  onClick={() => handleRoleSelection("mentee")}
                >
                  Mentee
                </li>
              </ul>
            )}
          </div>

          {user.isSignedIn === false ? (
            <a href="/sign-in">
              <button className="border px-6 py-1 rounded-md bg-[rgb(7,25,82)] text-white hover:bg-[rgb(8,131,149)] transition-all duration-200 ease-in-out">
                Login
              </button>
            </a>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
