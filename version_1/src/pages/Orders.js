import React, { useState } from 'react';

// Example orders data
const ordersData = [
    { id: '#056', items: [{ name: 'Burger', quantity: 3 }, { name: 'Steak', quantity: 5 }, { name: 'Milkshake', quantity: 4 }], status: 'Open' },
    { id: '#055', items: [{ name: 'Pizza', quantity: 2 }, { name: 'Fries', quantity: 6 }, { name: 'Cola', quantity: 3 }], status: 'Open' },
    { id: '#054', items: [{ name: 'Pasta', quantity: 1 }, { name: 'Salad', quantity: 3 }, { name: 'Water', quantity: 2 }], status: 'Closed' },
    // Add more orders to demonstrate pagination
    { id: '#053', items: [{ name: 'Taco', quantity: 5 }, { name: 'Juice', quantity: 2 }], status: 'Open' },
    { id: '#052', items: [{ name: 'Burger', quantity: 4 }], status: 'Closed' },
    { id: '#051', items: [{ name: 'Steak', quantity: 1 }], status: 'Open' },
    { id: '#050', items: [{ name: 'Milkshake', quantity: 3 }], status: 'Closed' },
    { id: '#049', items: [{ name: 'Pizza', quantity: 6 }], status: 'Open' },
    { id: '#048', items: [{ name: 'Fries', quantity: 3 }, { name: 'Cola', quantity: 1 }], status: 'Open' },
    { id: '#047', items: [{ name: 'Pasta', quantity: 2 }, { name: 'Salad', quantity: 1 }], status: 'Closed' },
    // Add enough rows for demonstration of pagination (feel free to add more)
    { id: '#046', items: [{ name: 'Juice', quantity: 3 }, { name: 'Burger', quantity: 2 }], status: 'Open' },
    { id: '#045', items: [{ name: 'Steak', quantity: 1 }], status: 'Closed' },
    { id: '#044', items: [{ name: 'Fries', quantity: 6 }], status: 'Open' },
    { id: '#043', items: [{ name: 'Milkshake', quantity: 2 }], status: 'Closed' },
    { id: '#042', items: [{ name: 'Pizza', quantity: 4 }], status: 'Open' },
    { id: '#041', items: [{ name: 'Water', quantity: 2 }], status: 'Closed' },
];

// Order Row component
const OrderRow = ({ id, onClick, status, toggleStatus }) => (
    <tr className="bg-purple-200 odd:bg-purple-300 cursor-pointer">
        <td className="p-2" onClick={() => onClick(id)}>{id}</td>
        <td className="p-2">12/10/2024</td> {/* Example date */}
        <td className="p-2">11:30 a.m.</td>  {/* Example time */}
        <td className="p-2">Kes. 150</td>   {/* Example amount */}
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

// Order Details Card component
const OrderDetailsCard = ({ selectedOrder }) => {
    if (!selectedOrder) {
        return (
            <div className="p-4 bg-gray-100 text-gray-500 text-center">
                Select an order to view its details
            </div>
        );
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-md">
            <div className="bg-gray-300 p-4 rounded-t-md text-center font-bold text-lg">
                OrderID: {selectedOrder.id}
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Order Details</h2>
                <table className="w-full text-left">
                    <thead>
                    <tr>
                        <th className="font-bold">Items</th>
                        <th className="font-bold text-right">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {selectedOrder.items.map((item, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-2">{item.name}</td>
                            <td className="py-2 text-right">{item.quantity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Main Orders Page component
export default function Orders() {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState(ordersData);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 15;

    // Handle clicking on an order row to display its details
    const handleOrderClick = (id) => {
        const order = orders.find((order) => order.id === id);
        setSelectedOrder(order);
    };

    // Handle toggling the status of an order
    const toggleStatus = (id) => {
        const updatedOrders = orders.map((order) =>
            order.id === id
                ? { ...order, status: order.status === 'Open' ? 'Closed' : 'Open' }
                : order
        );
        setOrders(updatedOrders);
    };

    // Calculate total pages
    const totalPages = Math.ceil(orders.length / rowsPerPage);

    // Get orders for current page
    const currentOrders = orders.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Handle pagination change
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex p-4">
            {/* Orders Table */}
            <div className="w-2/3 pr-4">
                <h2 className="text-xl font-semibold mb-4 text-purple-950">Orders</h2>
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
                    <tbody className="text-black font-serif font-medium">
                    {currentOrders.map((order) => (
                        <OrderRow
                            key={order.id}
                            id={order.id}
                            status={order.status}
                            onClick={handleOrderClick}
                            toggleStatus={() => toggleStatus(order.id)}
                        />
                    ))}
                    </tbody>
                </table>
                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md ${
                            currentPage === 1
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-purple-500 text-white'
                        }`}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-md ${
                            currentPage === totalPages
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-purple-500 text-white'
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Order Details */}
            <div className="w-1/3">
                <OrderDetailsCard selectedOrder={selectedOrder} />
            </div>
        </div>
    );
}
