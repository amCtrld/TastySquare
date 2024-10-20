import React from 'react'
import StockOverview from '../components/StockOverview'
import RevenueChart from '../components/RevenueChart'
import OrdersChart from '../components/OrdersChart'
import RecentOrders from '../components/RecentOrders'
import TopSellingItems from '../components/TopSellingItems'
import AddOrderButton from '../components/AddOrderButton'

export default function Dashboard() {
    return (
        <div className="flex-1 p-8 overflow-auto">
            <StockOverview />
            <div className="grid grid-cols-2 gap-8 mb-8">
                <RevenueChart />
                <RecentOrders>
                    <AddOrderButton /> {/* AddOrderButton passed as a child */}
                </RecentOrders>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <OrdersChart />
                <TopSellingItems />
            </div>
        </div>
    )
}
