import Image from 'next/image';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const Testimonials = () => {

    const [index, setIndex] = useState<number>(0)

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    }

    return (
        <div className='tw-flex tw-justify-center tw-my-10'>
            <Container className='tw-flex tw-flex-col tw-justify-center tw-items-center !tw-text-black' fluid>
                <span className='tw-text-[1.2rem] xsm:tw-text-[1.5rem] md:tw-text-[2.3rem] lg:tw-text-[3rem] tw-font-semibold tw-italic tw-mb-6 lg:tw-mb-6'>What Our Clients Have to Say</span>
                <Carousel className='tw-w-[100%] tw-h-[100%]' activeIndex={index} onSelect={handleSelect} indicators={false}>
                    <Carousel.Item className='tw-flex tw-justify-center tw-items-center tw-flex-col lg:tw-flex-row'>
                        <Image
                            src='https://images.unsplash.com/photo-1626544346705-1c0164970c41?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Customer Image'
                            width={200}
                            height={200}
                            className='tw-rounded-[50%] lg:tw-mb-4 tw-object-cover tw-w-[150px] tw-h-[150px] md:tw-w-[200px] md:tw-h-[200px]'
                        />
                        <Carousel.Caption>
                            <blockquote className="tw-p-4 tw-my-0 lg:tw-my-4 tw-border-s-4 tw-border-gray-300 tw-bg-gray-50 dark:tw-border-gray-500 dark:tw-bg-gray-800">
                                <span className='tw-text-[17px] xsm:tw-text-[20px] sm:tw-text-[22px] tw-font-semibold'>Suraj Kumar</span>
                                <p className="tw-text-[13.5px] xsm:tw-text-[17px] sm:tw-text-[18.5px] tw-italic tw-font-medium tw-leading-relaxed tw-text-gray-900 dark:tw-text-white">"Kudos to Rent Smart Cars! Their exceptional customer service and a fleet of well-maintained cars made our journey smooth and worry-free. I highly recommend Rent Smart Cars for your next adventure."</p>
                            </blockquote>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='tw-flex tw-justify-center tw-items-center tw-flex-col lg:tw-flex-row'>
                        <Image
                            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNzI5MjU4fHxlbnwwfHx8fHw%3D'
                            alt='Customer Image'
                            width={200}
                            height={200}
                            className='tw-rounded-[50%] lg:tw-mb-4 tw-object-cover tw-w-[150px] tw-h-[150px] md:tw-w-[200px] md:tw-h-[200px]'
                        />
                        <Carousel.Caption>
                            <blockquote className="tw-p-4 tw-my-0 lg:tw-my-4 tw-border-s-4 tw-border-gray-300 tw-bg-gray-50 dark:tw-border-gray-500 dark:tw-bg-gray-800">
                                <span className='tw-text-[17px] xsm:tw-text-[20px] sm:tw-text-[22px] tw-font-semibold'>John Doe</span>
                                <p className="tw-text-[13.5px] xsm:tw-text-[17px] sm:tw-text-[18.5px] tw-italic tw-font-medium tw-leading-relaxed tw-text-gray-900 dark:tw-text-white">"Rent Smart Cars exceeded our expectations. The spacious and comfortable vehicle added a touch of luxury to our family road trip. The staff's professionalism and friendliness made the experience truly memorable."</p>
                            </blockquote>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='tw-flex tw-justify-center tw-items-center tw-flex-col lg:tw-flex-row'>
                        <Image
                            src='https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MTcyOTI1OHx8ZW58MHx8fHx8'
                            alt='Customer Image'
                            width={200}
                            height={200}
                            className='tw-rounded-[50%] lg:tw-mb-4 tw-object-cover tw-w-[150px] tw-h-[150px] md:tw-w-[200px] md:tw-h-[200px]'
                        />
                        <Carousel.Caption>
                            <blockquote className="tw-p-4 tw-my-0 lg:tw-my-4 tw-border-s-4 tw-border-gray-300 tw-bg-gray-50 dark:tw-border-gray-500 dark:tw-bg-gray-800">
                                <span className='tw-text-[17px] xsm:tw-text-[20px] sm:tw-text-[22px] tw-font-semibold'>James Doe</span>
                                <p className="tw-text-[13.5px] xsm:tw-text-[17px] sm:tw-text-[18.5px] tw-italic tw-font-medium tw-leading-relaxed tw-text-gray-900 dark:tw-text-white">Rent Smart Cars offers prompt service, competitive rates, and a diverse selection of vehicles. Their commitment to customer satisfaction sets them apart. I'll be choosing Rent Smart Cars for all my future rentals."</p>
                            </blockquote>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    );
}

export default Testimonials;