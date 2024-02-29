import React from 'react';
import CardCategory from '../../components/common/Card/CardCategory/CardCategory';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Section = styled.section``;

const BlockThree = () => {
    const collectionArray = [
        {
            id: 1,
            name: 'Bodytech',
        },
        {
            id: 2,
            name: 'Multivitamins',
        },
        {
            id: 3,
            name: 'Muscle builders',
        },
        {
            id: 4,
            name: 'Plant based Protein',
        },
        {
            id: 5,
            name: 'Protein',
        },
        {
            id: 6,
            name: 'Whey protein',
        },
    ];

    return (
        <Section id="blockThree" className="p-10">
            <div className="container mx-auto">
                <Splide
                    options={{
                        perPage: 4,
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
                            <CardCategory id={element.id} name={element.name} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </Section>
    );
};

export default BlockThree;
