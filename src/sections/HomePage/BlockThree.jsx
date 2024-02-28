import React from 'react';
import CardCategory from '../../components/common/Card/CardCategory/CardCategory';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Section = styled.section``;

const BlockThree = () => {
    const collectionArray = Array(10).fill('0');
    return (
        <Section id="blockThree" className="p-10">
            <div className="container mx-auto">
                <Splide
                    options={{
                        perPage: 3,
                        rewind: true,
                        width: 800,
                        gap: '1rem',
                        width: '100%',
                        arrows: false,
                        pagination: false,
                        padding: 50,
                        start: 1,
                        focus: 'center',
                        autoScroll: {
                            pauseOnHover: true,
                            pauseOnFocus: false,
                            rewind: false,
                            speed: 1.5,
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    {collectionArray.map((element, index) => (
                        <SplideSlide key={index}>
                            <CardCategory name={index} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </Section>
    );
};

export default BlockThree;
