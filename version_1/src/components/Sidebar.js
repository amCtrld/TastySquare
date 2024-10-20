import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdHomeFilled, MdFreeBreakfast, MdAddBusiness, MdDonutSmall, MdPerson, MdSettings } from "react-icons/md";

const SidebarIcon = ({ icon, label, to }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link to={to} className={`p-3 rounded-lg mb-4 cursor-pointer ${isActive ? 'text-white bg-purple-800' : 'text-gray-400 hover:text-white hover:bg-purple-800'}`}>
            {icon}
            <span className="sr-only">{label}</span>
        </Link>
    );
};

export default function Sidebar() {
    return (
        <div className="w-16 bg-purple-950 flex flex-col items-center py-4 h-screen">
            {/* Top Icons */}
            <SidebarIcon icon={<MdHomeFilled size={24} />} label="Home" to="/" />
            <SidebarIcon icon={<MdFreeBreakfast size={24} />} label="Orders" to="/orders" />
            <SidebarIcon icon={<MdAddBusiness size={24} />} label="Inventory" to="/inventory" />
            <SidebarIcon icon={<MdDonutSmall size={24} />} label="Reports" to="/reports" />

            {/* Account and Settings icons at the bottom */}
            <div className="mt-auto">
                <SidebarIcon icon={<MdPerson size={24} />} label="Account" to="/account" />
                <SidebarIcon icon={<MdSettings size={24} />} label="Settings" to="/settings" />
            </div>
        </div>
    );
}