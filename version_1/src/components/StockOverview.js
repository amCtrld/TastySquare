import React from 'react';
import { HiBan, HiExclamationCircle, HiCheckCircle } from 'react-icons/hi';

const InventoryCard = ({ title, count, bgColor, iconColor, Icon }) => (
    <div className={`${bgColor} p-4 rounded-lg flex justify-between items-center`}>
        <div className="flex items-center">
            <Icon className={`text-4xl mr-2 ${iconColor}`} />
            <span className="text-gray-700">{title}</span>
        </div>
        <span className="text-2xl font-bold text-gray-800">{count} Items</span>
    </div>
);

export default function StockOverview() {
    return (
        <div className="grid grid-cols-3 gap-4 mb-8">
            <InventoryCard
                title="Out of stock"
                count={6}
                bgColor="bg-red-200"
                iconColor="text-red-600"
                Icon={HiBan}
            />
            <InventoryCard
                title="Low on stock"
                count={8}
                bgColor="bg-yellow-200"
                iconColor="text-amber-600"
                Icon={HiExclamationCircle}
            />
            <InventoryCard
                title="In stock"
                count={5}
                bgColor="bg-green-200"
                iconColor="text-green-600"
                Icon={HiCheckCircle}
            />
        </div>
    );
}
