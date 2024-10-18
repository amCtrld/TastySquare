import React from 'react';

const TopSellingRow = ({ item, totalUnits, leftUnits }) => (
    <tr className="bg-gray-100 odd:bg-gray-200">
        <td className="p-2">{item}</td>
        <td className="p-2">{totalUnits}</td>
        <td className="p-2">{leftUnits}</td>
    </tr>
);

export default function TopSellingItems() {
    const items = [
        { item: 'Chicken Pilau', totalUnits: 14, leftUnits: 6 },
        { item: 'Chicken Chips', totalUnits: 12, leftUnits: 8 },
        { item: 'Mountain Dew', totalUnits: 11, leftUnits: 13 },
    ];

    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-950">Top Selling</h2>
            <table className="w-full table-auto border-separate border-spacing-y-2">
                <thead>
                <tr>
                    <th className="text-left text-gray-500 p-2">Item Name</th>
                    <th className="text-left text-gray-500 p-2">Total Units</th>
                    <th className="text-left text-gray-500 p-2">Left Units</th>
                </tr>
                </thead>
                <tbody className="text-black font-sans font-medium">
                {items.map((item) => (
                    <TopSellingRow key={item.item} {...item} />
                ))}
                </tbody>
            </table>
        </div>
    );
}
