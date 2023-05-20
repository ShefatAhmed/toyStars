import React, { useState } from 'react';

const AddAtoy = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const subCategoryOptions = ['sports-car', 'truck', 'regular-car', 'mini-fire-truck', 'mini-police-car'];

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const sub_category = {selectedValue};
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const description = form.available_quantity.value;
        const newToy = {img, name, seller_name, seller_email, sub_category, price, rating, available_quantity, description};
        console.log(newToy);

        // 
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    return (
        <div className='py-5 px-8'>
            <form onSubmit={handleSubmit} className="max-w-2xl p-5 mx-auto bg-sky-50">
                <h1 className='text-center font-bold text-3xl my-1'>Add A Toy....</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Toy Image URL
                        </label>
                        <input
                            type="text"
                            name='img'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Toy Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            name='seller_name'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            name='seller_email'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Toy Category
                        </label>
                        <select onChange={(e) => setSelectedValue(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select Toy Category</option>
                            {subCategoryOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Price
                        </label>
                        <input
                            type="text"
                            name='price'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Rating
                        </label>
                        <input
                            type="text"
                            name='rating'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Available Quantity
                        </label>
                        <input
                            type="text"
                            name='available_quantity'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block  text-xs font-bold font-medium text-gray-800">
                            Detail Description
                        </label>
                        <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full mt-3 py-3 px-6 border border-transparent rounded-md shadow-sm font-bold font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 glass"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddAtoy;