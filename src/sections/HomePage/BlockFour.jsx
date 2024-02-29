import React from 'react';
import CardProduct from '../../components/common/Card/CardProduct/CardProduct';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const blockFour = () => {
    const collectionArray = Array(6).fill('0');

    return (
        <section id="blockFour">
            <div className="container mx-auto">
                <div className="flex flex-row gap-x-5">
                    <div className="w-2/6">
                        <div className="flex items-end w-full h-full p-5 bg-blue-800 bg- rounded-2xl">
                            <h2 className="text-3xl font-extrabold text-white uppercase">
                                Deal <br />
                                of the day.
                            </h2>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <div className="w-full h-full">
                            <Splide
                                options={{
                                    type: 'loop',
                                    perPage: 3,
                                    rewind: true,
                                    width: '100%',
                                    padding: { right: 150 },
                                    gap: '15px',
                                    drag: 'free',
                                    pagination: false,
                                    autoplay: true,
                                }}
                            >
                                {collectionArray.map((element, index) => (
                                    <SplideSlide key={index}>
                                        <CardProduct name={index} />
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default blockFour;
