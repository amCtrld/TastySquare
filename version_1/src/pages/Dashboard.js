import React from 'react'
import Sidebar from '../components/Sidebar'
import StockOverview from '../components/StockOverview'
import RevenueChart from '../components/RevenueChart'
import OrdersChart from '../components/OrdersChart'
import RecentOrders from '../components/RecentOrders'
import TopSellingItems from '../components/TopSellingItems'
import AddOrderButton from '../components/AddOrderButton'

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Sidebar />
            <div className="flex-1 p-8 overflow-auto">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                <StockOverview />
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <RevenueChart />
                    <OrdersChart />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <RecentOrders />
                        <AddOrderButton />
                    </div>
                    <TopSellingItems />
                </div>
            </div>
        </div>
    )
}