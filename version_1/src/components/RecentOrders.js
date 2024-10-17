import React from 'react'

const OrderRow = ({ id, date, time, amount, status }) => (
    <tr>
        <td>{id}</td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{amount}</td>
        <td>
      <span className={`px-2 py-1 rounded ${status === 'Open' ? 'bg-green-500' : 'bg-red-500'}`}>
        {status}
      </span>
        </td>
    </tr>
)

export default function RecentOrders() {
    const orders = [
        { id: '#056', date: '12/10/2024', time: '11:30 a.m', amount: 'Kes. 150', status: 'Open' },
        { id: '#055', date: '12/10/2024', time: '11:21 a.m', amount: 'Kes. 230', status: 'Open' },
        { id: '#054', date: '12/10/2024', time: '11:11 a.m', amount: 'Kes. 100', status: 'Closed' },
    ]

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <table className="w-full">
                <thead>
                <tr>
                    <th className="text-left">Order ID</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Time</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Status</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <OrderRow key={order.id} {...order} />
                ))}
                </tbody>
            </table>
        </div>
    )
}