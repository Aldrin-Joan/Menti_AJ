"use client";

import { Globe, Megaphone, Clipboard, MessageSquare, Bot } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function MenteeMaincontent() {
    const [selectedMenu, setSelectedMenu] = useState("all");
    const [announcements, setAnnouncements] = useState([]);
    const [newAnnouncement, setNewAnnouncement] = useState("");

    useEffect(() => {
        const storedAnnouncements = localStorage.getItem("announcements");
        if (storedAnnouncements) {
            setAnnouncements(JSON.parse(storedAnnouncements));
        }
    }, []);

    useEffect(() => {
        if (announcements.length > 0) {
            localStorage.setItem("announcements", JSON.stringify(announcements));
        }
    }, [announcements]);

    const handlePostAnnouncement = () => {
        if (newAnnouncement.trim() !== "") {
            const newPost = {
                content: newAnnouncement,
                time: new Date().toLocaleString(),
            };
            setAnnouncements([newPost, ...announcements]);
            setNewAnnouncement("");
            setSelectedMenu("all");
        }
    };

    const smallnav = [
        {
            id: 1,
            name: 'All',
            icon: Globe,
            href: "#",
            content: 'This is the All content',
        },
        {
            id: 2,
            name: 'Announcement',
            icon: Megaphone,
            href: "#",
            content: 'This is the Announcement content',
        },
        {
            id: 3,
            name: 'Task',
            icon: Clipboard,
            href: "#",
            content: 'This is the Task content',
        },
        {
            id: 4,
            name: 'Chat',
            icon: MessageSquare,
            href: "#",
            content: 'This is the Chat content',
        },
        {
            id: 5,
            name: 'AI',
            icon: Bot,
            href: "#",
            content: 'This is the AI content',
        }   
    ];

    return (
        <div className='flex-1 bg-gradient-to-r from-[#07213e] to-[#0bb3d6] shadow-md rounded-lg p-8 mx-6'>
            <nav className='flex space-x-4 justify-center mb-6'>
                {smallnav.map((item) => (
                    <a key={item.id} href={item.href} className='flex items-center px-6 py-3 bg-[#098095] text-white rounded-full shadow-lg hover:bg-[#071952] transition duration-200 transform hover:scale-105 group' onClick={(e) => {e.preventDefault(); setSelectedMenu(item.content);}}>
                        <item.icon className='mr-2 group-hover:animate-bounce' />
                        {item.name}
                    </a>
                ))}
            </nav>

            <div id="content-area" className="bg-[#ebf4f6] p-6 mt-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-100">
                {selectedMenu === "Announcement" && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="font-bold mb-2 text-lg">What would you like to share?</h3>
                        <textarea
                            className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#07213e] transition duration-200"
                            placeholder="Announce here..."
                            value={newAnnouncement}
                            onChange={(e) => setNewAnnouncement(e.target.value)}
                        ></textarea>
                        <button
                            className="mt-2 bg-[#07213e] text-white px-4 py-2 rounded-full transition duration-300 hover:bg-[#098095] shadow-lg"
                            onClick={handlePostAnnouncement}
                        >
                            Post
                        </button>
                    </div>
                )}

                <h3 className="text-xl font-bold mb-4">Scheduled Meetings & Announcements</h3>

                {announcements.length > 0 && (
                    <div className="mb-4">
                        <h4 className="font-bold">Announcements</h4>
                        {announcements.map((announcement, index) => (
                            <div key={index} className="bg-gradient-to-r from-[#fdfdfd] to-[#83c2c7] p-4 mb-2 rounded-lg shadow transition-transform duration-300 hover:shadow-lg hover:scale-105">
                                <p className="text-black">{announcement.content}</p>
                                <p className="text-black text-sm">Posted on: {announcement.time}</p>
                            </div>
                        ))}
                    </div>
                )}

                {selectedMenu === null && <p>Click on a menu item to display content here.</p>}
            </div>
        </div>
    );
}

export default MenteeMaincontent;
