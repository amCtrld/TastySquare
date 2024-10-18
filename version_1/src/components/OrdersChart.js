import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = {
    daily: [
        { name: '00:00', value: 10 },
        { name: '01:00', value: 15 },
        { name: '02:00', value: 12 },
        { name: '03:00', value: 20 },
        { name: '04:00', value: 18 },
        { name: '05:00', value: 25 },
        { name: '06:00', value: 22 },
        { name: '07:00', value: 15 },
        { name: '08:00', value: 18 },
        { name: '09:00', value: 28 },
        { name: '10:00', value: 30 },
        { name: '11:00', value: 22 },
        { name: '12:00', value: 20 },
        { name: '13:00', value: 26 },
        { name: '14:00', value: 18 },
        { name: '15:00', value: 22 },
        { name: '16:00', value: 19 },
        { name: '17:00', value: 27 },
        { name: '18:00', value: 35 },
        { name: '19:00', value: 40 },
        { name: '20:00', value: 32 },
        { name: '21:00', value: 25 },
        { name: '22:00', value: 18 },
        { name: '23:00', value: 10 },
    ],
    weekly: [
        { name: 'Mon', value: 20 },
        { name: 'Tue', value: 30 },
        { name: 'Web', value: 25 },
        { name: 'Thu', value: 40 },
        { name: 'Fri', value: 35 },
        { name: 'Sat', value: 50 },
        { name: 'Sun', value: 45 },
    ],
    monthly: [
        { name: 'Jan', value: 65 },
        { name: 'Feb', value: 59 },
        { name: 'Mar', value: 80 },
        { name: 'Apr', value: 81 },
        { name: 'May', value: 56 },
        { name: 'Jun', value: 55 },
        { name: 'Jul', value: 40 },
        { name: 'Aug', value: 75 },
        { name: 'Sep', value: 90 },
        { name: 'Oct', value: 85 },
        { name: 'Nov', value: 60 },
        { name: 'Dec', value: 70 },
    ],
};

export default function OrdersChart() {
    const [timeRange, setTimeRange] = useState('monthly');

    return (
        <div className="bg-gray-50 p-4 rounded-lg relative">
            <h2 className="text-xl font-semibold mb-4 text-purple-950">Total Orders</h2>
            <div className="absolute right-4 top-4 flex space-x-2">
                <button
                    className={`mr-2 px-3 py-1 rounded ${timeRange === 'daily' ? 'bg-purple-900 text-white rounded-full' : 'border border-purple-950 rounded-full text-purple-900 hover:bg-gray-600'}`}
                    onClick={() => setTimeRange('daily')}
                >
                    Daily
                </button>
                <button
                    className={`mr-2 px-3 py-1 rounded ${timeRange === 'weekly' ? 'bg-purple-900 text-white rounded-full' : 'border border-purple-950 rounded-full text-purple-900 hover:bg-gray-600'}`}
                    onClick={() => setTimeRange('weekly')}
                >
                    Weekly
                </button>
                <button
                    className={`px-3 py-1 rounded ${timeRange === 'monthly' ? 'bg-purple-900 text-white rounded-full' : 'border border-purple-950 rounded-full text-purple-900 hover:bg-gray-600'}`}
                    onClick={() => setTimeRange('monthly')}
                >
                    Monthly
                </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data[timeRange]}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#d9d2e9" />
                    <XAxis dataKey="name" stroke="#8e7cc3" />
                    <YAxis stroke="#8e7cc3" />
                    <Tooltip
                        cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                        contentStyle={{ backgroundColor: '#2d3748', borderRadius: '5px', border: 'none', color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#351c75" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
