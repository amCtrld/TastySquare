import React from 'react'

const TopSellingRow = ({ item, totalUnits, leftUnits }) => (
    <tr>
        <td>{item}</td>
        <td>{totalUnits}</td>
        <td>{leftUnits}</td>
    </tr>
)

export default function TopSellingItems() {
    const items = [
        { item: 'Chicken Pilau', totalUnits: 14, leftUnits: 6 },
        { item: 'Chicken Chips', totalUnits: 12, leftUnits: 8 },
        { item: 'Mountain Dew', totalUnits: 11, leftUnits: 13 },
        { item: 'Coca Cola', totalUnits: 11, leftUnits: 13 },
    ]

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Top Selling</h2>
            <table className="w-full">
                <thead>
                <tr>
                    <th className="text-left">Item ID</th>
                    <th className="text-left">Total Units</th>
                    <th className="text-left">Left Units</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <TopSellingRow key={item.item} {...item} />
                ))}
                </tbody>
            </table>
        </div>
    )
}