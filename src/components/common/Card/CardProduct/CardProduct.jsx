import React from 'react';
import Ruler1Protein from '../../../../assets/images/products/rule1-protein-5lbs.jpg';
import styled from 'styled-components';

const ProductCard = styled.div`
    img {
        transition: 0.3s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

const CardProduct = (props) => {
    return (
        <ProductCard className="relative flex flex-col overflow-hidden text-gray-700 bg-white border bg-clip-border rounded-xl">
            <a
                href="/"
                className="relative block mx-4 mt-6 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-52"
            >
                <img
                    src={Ruler1Protein}
                    alt=""
                    className="object-contain w-full h-full"
                />
            </a>
            <div className="p-6 pb-2">
                <div className="flex items-center justify-between">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Rule 1 Protein
                    </p>
                </div>
                <div className="flex gap-x-1 product-card__price">
                    <span className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-900 product-card__price--regular">
                        1.590.000<span className="currency">đ</span>
                    </span>
                    <del className="flex items-center font-sans text-sm antialiased font-medium leading-relaxed text-gray-400 product-card__price--sale">
                        2.020.000<span className="currency">đ</span>
                    </del>
                </div>

                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75"></p>
            </div>
            <div className="p-3">
                <button
                    type="button"
                    className="w-full rounded-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Add to Cart
                </button>
            </div>
        </ProductCard>
    );
};

export default CardProduct;
