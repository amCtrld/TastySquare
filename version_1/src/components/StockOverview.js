import React from 'react'

const InventoryCard = ({ title, count, color }) => (
    <div className={`${color} p-4 rounded-lg flex justify-between items-center`}>
        <span>{title}</span>
        <span className="text-2xl font-bold">{count} Items</span>
    </div>
)

export default function StockOverview() {
    return (
        <div className="grid grid-cols-3 gap-4 mb-8">
            <InventoryCard title="Out of stock" count={6} color="bg-red-500" />
            <InventoryCard title="Low on stock" count={8} color="bg-yellow-500" />
            <InventoryCard title="In stock" count={5} color="bg-green-500" />
        </div>
    )
}