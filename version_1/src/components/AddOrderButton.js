import React, { useState, useRef, useEffect } from 'react';
import { PlusCircle, X, Minus, Plus } from 'lucide-react';

const foodMenu = [
    { id: 1, name: 'Burger', price: 5.99 },
    { id: 2, name: 'Pizza', price: 8.99 },
    { id: 3, name: 'Pasta', price: 7.99 },
    { id: 4, name: 'Salad', price: 6.99 },
    { id: 5, name: 'Steak', price: 15.99 },
];

export default function MultiItemOrderButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [isReviewing, setIsReviewing] = useState(false);
    const [orderId, setOrderId] = useState('');
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
                setIsReviewing(false);
            }
        };
        if (isModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen]);

    const handleAddOrder = () => {
        setIsModalOpen(true);
    };

    const handleReviewOrder = () => {
        setIsReviewing(true);
        setOrderId(`ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
    };

    const handleCompleteOrder = () => {
        console.log('Order completed:', selectedItems);
        setIsModalOpen(false);
        setIsReviewing(false);
        setSelectedItems({});
    };

    const handleQuantityChange = (item, newQuantity) => {
        if (newQuantity >= 0) {
            setSelectedItems((prev) => ({
                ...prev,
                [item.id]: { ...item, quantity: newQuantity }
            }));
        }
        if (newQuantity === 0) {
            setSelectedItems((prev) => {
                const newItems = { ...prev };
                delete newItems[item.id];
                return newItems;
            });
        }
    };

    const handleQuantityInput = (e, item) => {
        const value = parseInt(e.target.value, 10) || 0;
        handleQuantityChange(item, value);
    };

    const filteredMenu = foodMenu.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalAmount = Object.values(selectedItems).reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <button
                onClick={handleAddOrder}
                className="mt-4 w-full bg-purple-800 text-white flex items-center justify-between px-4 py-2 rounded-full hover:bg-purple-500 transition-colors"
            >
                <span>Add Order</span>
                <PlusCircle className="ml-2 w-5 h-5" />
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div ref={modalRef} className="relative bg-white p-8 rounded-lg w-1/2 max-h-[80vh] overflow-y-auto">
                        <button
                            onClick={() => {
                                setIsModalOpen(false);
                                setIsReviewing(false);
                            }}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-xl font-bold mb-4">{isReviewing ? `Review Order: ${orderId}` : 'Add Order'}</h2>

                        {!isReviewing && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Search menu..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                                />

                                <div className="mb-4 text-purple-600">
                                    {filteredMenu.length > 0 ? (
                                        filteredMenu.map((item) => (
                                            <div
                                                key={item.id}
                                                className={`p-2 mb-2 border rounded-md flex justify-between items-center ${
                                                    selectedItems[item.id] ? 'bg-green-200' : 'bg-gray-100'
                                                }`}
                                            >
                                                <span>{item.name} - ${item.price.toFixed(2)}</span>

                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => handleQuantityChange(item, (selectedItems[item.id]?.quantity || 0) - 1)}
                                                        className="px-2 py-1 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>

                                                    <input
                                                        type="number"
                                                        value={selectedItems[item.id]?.quantity || 0}
                                                        onChange={(e) => handleQuantityInput(e, item)}
                                                        className="w-12 text-center border border-gray-300 rounded-md"
                                                    />

                                                    <button
                                                        onClick={() => handleQuantityChange(item, (selectedItems[item.id]?.quantity || 0) + 1)}
                                                        className="px-2 py-1 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No items found.</p>
                                    )}
                                </div>

                                <button
                                    onClick={handleReviewOrder}
                                    className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-600"
                                    disabled={Object.keys(selectedItems).length === 0}
                                >
                                    Review Order
                                </button>
                            </>
                        )}

                        {isReviewing && (
                            <>
                                <div className="mb-4 overflow-x-auto text-purple-600">
                                    <h2 className="text-xl font-semibold mb-4 text-purple-950">Order Review</h2>
                                    <table className="min-w-full bg-white">
                                        <thead className="bg-purple-600 text-white">
                                        <tr>
                                            <th className="py-2 px-4 text-left">Item</th>
                                            <th className="py-2 px-4 text-left">Quantity</th>
                                            <th className="py-2 px-4 text-left">Price</th>
                                            <th className="py-2 px-4 text-left">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Object.values(selectedItems).map((item, index) => (
                                            <tr key={item.id}
                                                className={index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-300'}>
                                                <td className="py-2 px-4">{item.name}</td>
                                                <td className="py-2 px-4">{item.quantity}</td>
                                                <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                                                <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                        <tfoot className="bg-gray-100 font-bold">
                                        <tr>
                                            <td colSpan="3" className="py-2 px-4 text-right">Total:</td>
                                            <td className="py-2 px-4">${totalAmount.toFixed(2)}</td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className="flex justify-between">
                                <button
                                        onClick={() => setIsReviewing(false)}
                                        className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
                                    >
                                        Edit Order
                                    </button>
                                    <button
                                        onClick={handleCompleteOrder}
                                        className="bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
                                    >
                                        Complete Order
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}