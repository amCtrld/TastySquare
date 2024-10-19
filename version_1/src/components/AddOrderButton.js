import React from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi'; // Importing the icon

export default function AddOrderButton() {
    const handleAddOrder = () => {
        // Implement logic
        console.log('Add order clicked');
    };

    return (
        <button
            onClick={handleAddOrder}
            className="mt-4 w-full bg-purple-800 text-white flex items-center justify-between px-4 py-2 rounded-full hover:bg-purple-500 transition-colors"
        >
            <span>Add Order</span> {/* Text on the left */}
            <HiOutlinePlusCircle className="ml-2 w-5 h-5" /> {/* Icon on the right */}
        </button>
    );
}
