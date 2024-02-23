import React from 'react';
import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroSection = styled.section`
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        background-blend-mode: multiply;
    }
`;

const BlockOne = () => {
    return (
        <HeroSection>
            <div className="relative flex items-center justify-center min-h-[900px] overflow-hidden">
                <div className="absolute z-20 flex flex-col items-center max-w-3xl bottom-20">
                    <h1 className="mb-4 font-mono text-4xl font-extrabold leading-none tracking-tight text-center uppercase text-slate-300 md:text-5xl lg:text-6xl">
                        Enhance your body
                    </h1>
                    <p className="w-full max-w-md mb-6 text-lg font-normal text-center text-slate-300 lg:text-xl">
                        Stronger than yesterday, weaker than tomorrow. Progress
                        over perfection.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                    >
                        <span>Shop Now</span>
                        <FaArrowRightLong />
                    </a>
                </div>

                <div className="z-10 overlay"></div>

                <div className="absolute z-0 w-auto min-w-full aspect-w-16 aspect-h-9 max-w-none">
                    <iframe
                        width="100%"
                        height="900"
                        src="https://www.youtube.com/embed/W7NFoCfXAXU?si=g2cJL82F9TXvNyC9&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&rel=0&playlist=W7NFoCfXAXU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </HeroSection>
    );
};

export default BlockOne;
