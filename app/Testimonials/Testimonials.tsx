import Image from 'next/image';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const Testimonials = () => {

    const [index, setIndex] = useState<number>(0)

    const handleSelect = (selectedIndex: number) => {
        console.log("Selected Index" + selectedIndex);
        setIndex(selectedIndex);
    }

    return (
        <div className='tw-flex tw-justify-center tw-h-[400px] tw-my-10'>
            <Container className='tw-flex tw-flex-col tw-justify-center tw-items-center !tw-text-black' fluid>
                <span className='tw-text-[3rem] tw-font-semibold tw-italic'>What Our Clients Have to Say</span>
                <Carousel className='tw-w-[100%] tw-h-[80%]' activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className='tw-flex tw-justify-center tw-items-center'>
                        <Image
                            src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
                            alt='Customer Image'
                            width={200}
                            height={200}
                            className='tw-rounded-[50%] tw-mb-4'
                        />
                        <Carousel.Caption>
                            <blockquote className="tw-p-4 tw-my-4 tw-border-s-4 tw-border-gray-300 tw-bg-gray-50 dark:tw-border-gray-500 dark:tw-bg-gray-800">
                                <h4>First slide label</h4>
                                <p className="tw-text-xl tw-italic tw-font-medium tw-leading-relaxed tw-text-gray-900 dark:tw-text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                            </blockquote>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='tw-flex tw-justify-center tw-items-center'>
                        <Image
                            src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
                            alt='Customer Image'
                            width={200}
                            height={200}
                            className='tw-rounded-[50%] tw-mb-4'
                        />
                        <Carousel.Caption>
                            <blockquote className="tw-p-4 tw-my-4 tw-border-s-4 tw-border-gray-300 tw-bg-gray-50 dark:tw-border-gray-500 dark:tw-bg-gray-800">
                                <h4>Second slide label</h4>
                                <p className="tw-text-xl tw-italic tw-font-medium tw-leading-relaxed tw-text-gray-900 dark:tw-text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                            </blockquote>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='tw-flex tw-justify-center tw-items-center'>
                        <Image
                            src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
                            alt='Customer Image'
                            width={200}
                            height={200}
                            className='tw-rounded-[50%] tw-mb-4'
                        />
                        <Carousel.Caption>
                            <blockquote className="tw-p-4 tw-my-4 tw-border-s-4 tw-border-gray-300 tw-bg-gray-50 dark:tw-border-gray-500 dark:tw-bg-gray-800">
                                <h4>Third slide label</h4>
                                <p className="tw-text-xl tw-italic tw-font-medium tw-leading-relaxed tw-text-gray-900 dark:tw-text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                            </blockquote>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    );
}

export default Testimonials;