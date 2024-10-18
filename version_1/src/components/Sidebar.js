import React from 'react';
import { Home, FileText, Package, PieChart } from 'lucide-react';

const SidebarIcon = ({ icon, label }) => (
    <div className="p-3 rounded-lg mb-4 text-gray-500 hover:text-white hover:bg-gray-700 cursor-pointer">
        {icon}
        <span className="sr-only">{label}</span>
    </div>
);

export default function Sidebar() {
    return (
        <div className="w-16 bg-gray-800 flex flex-col items-center justify-center py-4">
            <SidebarIcon icon={<Home size={24} />} label="Home" />
            <SidebarIcon icon={<FileText size={24} />} label="Orders" />
            <SidebarIcon icon={<Package size={24} />} label="Inventory" />
            <SidebarIcon icon={<PieChart size={24} />} label="Reports" />
        </div>
    );
}
