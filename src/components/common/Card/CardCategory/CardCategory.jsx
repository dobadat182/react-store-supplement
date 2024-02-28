import React from 'react';
const sampleImage = require('../../../../assets/images/products/multi-vitamins.jpeg');

const CardCategory = () => {
    return (
        <a
            href="/"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg sshadow-sm hadow md:flex-row md:max-w-xl"
        >
            <div className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
                <img className="object-cover" src={sampleImage} alt="" />
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal">
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">
                    Multivitamins
                </h4>
                <p className="mb-3 font-normal text-gray-700">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </div>
        </a>
    );
};

export default CardCategory;