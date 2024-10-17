import React from 'react'

export default function AddOrderButton() {
    const handleAddOrder = () => {
        // Implement logic
        console.log('Add order clicked')
    }

    return (
        <button
            onClick={handleAddOrder}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
            Add Order
        </button>
    )
}