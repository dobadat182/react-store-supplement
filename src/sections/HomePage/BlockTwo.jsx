import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    .category-items {
        img {
            transition: transform 0.4s ease-in-out;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.7),
                transparent
            );
        }

        &:hover {
            img {
                transform: scale(1.1);
                filter: brightness(70%) blur(2px);
            }
        }
    }
`;

const BlockTwo = () => {
    return (
        <Section id="blockTwo" className="p-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-8">
                    <div className="relative overflow-hidden category-items rounded-2xl">
                        <img
                            className="w-full"
                            src={require('../../assets/images/banners/banners-1.jpg')}
                            alt=""
                        />
                        <div className="overlay"></div>
                        <div className="absolute bottom-0 flex flex-col items-center w-full py-10">
                            <h3 className="text-3xl font-bold text-white">
                                BUILD MUSCLE
                            </h3>
                            <p className="text-gray-200">Shop Now</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden category-items rounded-2xl">
                        <img
                            className="w-full"
                            src={require('../../assets/images/banners/banners-2.jpg')}
                            alt=""
                        />
                        <div className="absolute bottom-0 flex flex-col items-center w-full py-10">
                            <h3 className="text-3xl font-bold text-white">
                                LOSE WEIGHT
                            </h3>
                            <p className="text-gray-200">Shop Now</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden category-items rounded-2xl">
                        <img
                            className="w-full"
                            src={require('../../assets/images/banners/banners-3.jpg')}
                            alt=""
                        />
                        <div className="absolute bottom-0 flex flex-col items-center w-full py-10">
                            <h3 className="text-3xl font-bold text-white">
                                RETRO ESCAPE
                            </h3>
                            <p className="text-gray-200">Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default BlockTwo;
