import React from 'react';
const sampleImg = require('../../../../assets/images/categories/bodytech.jpg');

const CardCategory = (props) => {
    return (
        <a
            id={props.id}
            href="/"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg sshadow-sm hadow md:max-w-xl"
        >
            <div className="w-full mb-2 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
                <img className="object-cover" src={sampleImg} alt="" />
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal">
                <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 uppercase">
                    {props.name}
                </h4>
            </div>
        </a>
    );
};

export default CardCategory;
