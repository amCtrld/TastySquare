import React, { useState } from 'react';

const OrderRow = ({ id, date, time, amount, initialStatus }) => {
    const [status, setStatus] = useState(initialStatus);

    const toggleStatus = () => {
        setStatus(status === 'Open' ? 'Closed' : 'Open');
    };

    return (
        <tr className="bg-gray-100 odd:bg-gray-200">
            <td className="p-2">{id}</td>
            <td className="p-2">{date}</td>
            <td className="p-2">{time}</td>
            <td className="p-2">{amount}</td>
            <td className="p-2">
                <div
                    className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                        status === 'Open' ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    onClick={toggleStatus}
                >
                    <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                            status === 'Open' ? 'translate-x-0' : 'translate-x-7'
                        }`}
                    />
                </div>
            </td>
        </tr>
    );
};

export default function RecentOrders() {
    const orders = [
        { id: '#056', date: '12/10/2024', time: '11:30 a.m.', amount: 'Kes. 150', status: 'Open' },
        { id: '#055', date: '12/10/2024', time: '11:21 a.m.', amount: 'Kes. 230', status: 'Open' },
        { id: '#054', date: '12/10/2024', time: '11:11 a.m.', amount: 'Kes. 100', status: 'Closed' },
    ];

    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-950">Recent Orders</h2>
            <table className="w-full table-auto border-separate border-spacing-y-2">
                <thead>
                <tr>
                    <th className="text-left text-gray-500 p-2">Order ID</th>
                    <th className="text-left text-gray-500 p-2">Date</th>
                    <th className="text-left text-gray-500 p-2">Time</th>
                    <th className="text-left text-gray-500 p-2">Amount</th>
                    <th className="text-left text-gray-500 p-2">Status</th>
                </tr>
                </thead>
                <tbody className="text-black font-sans font-medium">
                {orders.map((order) => (
                    <OrderRow key={order.id} {...order} initialStatus={order.status} />
                ))}
                </tbody>
            </table>
        </div>
    );
}
