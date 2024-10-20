import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'

// Mock data for orders
const mockOrders = [
    { id: '#056', date: '2024-10-12', time: '11:30', amount: 150, status: 'Open', details: { burgers: 3, steaks: 5, milkshakes: 4 } },
    { id: '#055', date: '2024-10-12', time: '11:21', amount: 230, status: 'Open', details: { burgers: 2, steaks: 2, milkshakes: 3 } },
    { id: '#054', date: '2024-10-12', time: '11:11', amount: 100, status: 'Closed', details: { burgers: 1, steaks: 3, milkshakes: 1 } },
    { id: '#053', date: '2024-10-11', time: '15:45', amount: 180, status: 'Open', details: { burgers: 4, steaks: 6, milkshakes: 5 } },
    { id: '#052', date: '2024-10-11', time: '14:30', amount: 90, status: 'Closed', details: { burgers: 2, steaks: 1, milkshakes: 2 } },
]

// OrderRow component to toggle order status and click to view details
const OrderRow = ({ id, date, time, amount, status, details, onSelectOrder }) => {
    const [orderStatus, setOrderStatus] = useState(status)

    const toggleStatus = () => {
        setOrderStatus(orderStatus === 'Open' ? 'Closed' : 'Open')
    }

    return (
        <tr className="border-b border-gray-700">
            <td className="p-3 cursor-pointer" onClick={() => onSelectOrder({ id, date, time, amount, details })}>
                {id}
            </td>
            <td className="p-3">{date}</td>
            <td className="p-3">{time}</td>
            <td className="p-3">Kes. {amount}</td>
            <td className="p-3">
                <div
                    className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                        orderStatus === 'Open' ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    onClick={toggleStatus}
                >
                    <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                            orderStatus === 'Open' ? 'translate-x-0' : 'translate-x-7'
                        }`}
                    />
                </div>
            </td>
        </tr>
    )
}

// Main Orders component with table and order details card
export default function Orders() {
    const [orders, setOrders] = useState(mockOrders)
    const [currentPage, setCurrentPage] = useState(1)
    const [ordersPerPage] = useState(5)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedOrder, setSelectedOrder] = useState(null)

    // Filtering function
    const filteredOrders = orders.filter(order =>
        Object.values(order).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    )

    // Pagination
    const indexOfLastOrder = currentPage * ordersPerPage
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleOrderClick = (order) => {
        setSelectedOrder(order)
    }

    return (
        <div className="flex flex-row p-8 gap-8">
            {/* Orders Table */}
            <div className="flex-1 bg-gray-800 rounded-lg p-4 overflow-auto">
                <h1 className="text-3xl font-bold mb-8">Orders</h1>

                {/* Search bar */}
                <div className="mb-4 relative">
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full p-2 pl-10 bg-gray-800 rounded-lg text-gray-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>

                {/* Orders table */}
                <table className="w-full">
                    <thead>
                    <tr className="bg-gray-700">
                        <th className="p-3 text-left">Order ID</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Time</th>
                        <th className="p-3 text-left">Amount</th>
                        <th className="p-3 text-left">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentOrders.map((order) => (
                        <OrderRow
                            key={order.id}
                            {...order}
                            onSelectOrder={handleOrderClick}
                        />
                    ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, filteredOrders.length)} of {filteredOrders.length} entries
                    </div>
                    <div className="flex">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 bg-gray-700 rounded-l-lg disabled:opacity-50"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        {Array.from({ length: Math.ceil(filteredOrders.length / ordersPerPage) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === Math.ceil(filteredOrders.length / ordersPerPage)}
                            className="px-3 py-1 bg-gray-700 rounded-r-lg disabled:opacity-50"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Order Details Card */}
            {selectedOrder && (
                <div className="w-1/3 bg-gray-800 rounded-lg p-4 text-white">
                    <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                    <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                    <p><strong>Date:</strong> {selectedOrder.date}</p>
                    <p><strong>Time:</strong> {selectedOrder.time}</p>
                    <p><strong>Amount:</strong> Kes. {selectedOrder.amount}</p>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2">Items Ordered:</h3>
                        <p>Burgers: {selectedOrder.details.burgers}</p>
                        <p>Steaks: {selectedOrder.details.steaks}</p>
                        <p>Milkshakes: {selectedOrder.details.milkshakes}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
