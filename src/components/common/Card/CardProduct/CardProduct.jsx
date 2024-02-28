import React from 'react';
import Ruler1Protein from '../../../../assets/images/products/rule1-protein-5lbs.jpg';

const CardProduct = (props) => {
    return (
        <div class="relative flex flex-col text-gray-700 bg-white border  bg-clip-border rounded-xl overflow-hidden">
            <div class="relative mx-4 mt-6 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-52">
                <img
                    src={Ruler1Protein}
                    alt=""
                    class="object-cover w-full h-full"
                />
            </div>
            <div class="p-6 pb-2">
                <div class="flex items-center justify-between">
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Rule 1 Protein{' '}
                        <b className="text-red-600">{props.name + 1}</b>
                    </p>
                </div>
                <div className="flex gap-x-1 product-card__price">
                    <span class="block font-sans text-base antialiased font-medium leading-relaxed text-gray-900 product-card__price--regular">
                        1.590.000<span className="currency">đ</span>
                    </span>
                    <del class="flex items-center font-sans text-sm antialiased font-medium leading-relaxed text-gray-400 product-card__price--sale">
                        2.020.000<span className="currency">đ</span>
                    </del>
                </div>

                <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"></p>
            </div>
            <div class="p-3">
                <button
                    type="button"
                    class="w-full rounded-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default CardProduct;
