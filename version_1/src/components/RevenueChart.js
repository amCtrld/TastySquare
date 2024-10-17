import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = {
    daily: [
        { name: 'Mon', value: 20 },
        { name: 'Tue', value: 30 },
        { name: 'Wed', value: 25 },
        { name: 'Thu', value: 40 },
        { name: 'Fri', value: 35 },
        { name: 'Sat', value: 50 },
        { name: 'Sun', value: 45 },
    ],
    weekly: [
        { name: 'Week 1', value: 200 },
        { name: 'Week 2', value: 250 },
        { name: 'Week 3', value: 180 },
        { name: 'Week 4', value: 220 },
    ],
    monthly: [
        { name: 'Jan', value: 65 },
        { name: 'Feb', value: 59 },
        { name: 'Mar', value: 80 },
        { name: 'Apr', value: 81 },
        { name: 'May', value: 56 },
        { name: 'Jun', value: 55 },
        { name: 'Jul', value: 40 },
    ],
}

export default function RevenueChart() {
    const [timeRange, setTimeRange] = useState('monthly')

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
            <div className="mb-4">
                <button
                    className={`mr-2 px-3 py-1 rounded ${timeRange === 'daily' ? 'bg-blue-500' : 'bg-gray-700'}`}
                    onClick={() => setTimeRange('daily')}
                >
                    Daily
                </button>
                <button
                    className={`mr-2 px-3 py-1 rounded ${timeRange === 'weekly' ? 'bg-blue-500' : 'bg-gray-700'}`}
                    onClick={() => setTimeRange('weekly')}
                >
                    Weekly
                </button>
                <button
                    className={`px-3 py-1 rounded ${timeRange === 'monthly' ? 'bg-blue-500' : 'bg-gray-700'}`}
                    onClick={() => setTimeRange('monthly')}
                >
                    Monthly
                </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data[timeRange]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4ade80" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}