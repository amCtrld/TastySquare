import React from 'react';
import { MdHomeFilled, MdFreeBreakfast, MdAddBusiness, MdDonutSmall, MdPerson, MdSettings } from "react-icons/md";

const SidebarIcon = ({ icon, label }) => (
    <div className="p-3 rounded-lg mb-4 text-gray-500 hover:text-white hover:bg-gray-700 cursor-pointer">
        {icon}
        <span className="sr-only">{label}</span>
    </div>
);

export default function Sidebar() {
    return (
        <div className="w-16 bg-purple-950 flex flex-col items-center py-4">
            {/* Top Icons */}
            <SidebarIcon icon={<MdHomeFilled size={24} />} label="Home" />
            <SidebarIcon icon={<MdFreeBreakfast size={24} />} label="Orders" />
            <SidebarIcon icon={<MdAddBusiness size={24} />} label="Inventory" />
            <SidebarIcon icon={<MdDonutSmall size={24} />} label="Reports" />

            {/* Account and Settings icons at the bottom */}
            <div className="mt-auto">
                <SidebarIcon icon={<MdPerson size={24} />} label="Account" />
                <SidebarIcon icon={<MdSettings size={24} />} label="Settings" />
            </div>
        </div>
    );
}
