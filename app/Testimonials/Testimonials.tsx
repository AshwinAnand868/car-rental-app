import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// import { MDBCarousel, MDBContainer, MDBCarouselItem, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
// import Image from 'next/image'
// import React from 'react'
// import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {

    return (
        <div className='tw-flex tw-justify-center'>
            <Container className='tw-my-10 tw-flex tw-flex-col tw-justify-center tw-items-center' fluid>
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <Image
                            src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
                            alt='Customer Image'
                            width={120}
                            height={120}
                            className='tw-rounded-[50%] tw-mb-4'
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
                            alt='Customer Image'
                            width={120}
                            height={120}
                            className='tw-rounded-[50%] tw-mb-4'
                        />
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
                            alt='Customer Image'
                            width={120}
                            height={120}
                            className='tw-rounded-[50%] tw-mb-4'
                        />
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    );
    //     return (
    //         <div className='flex justify-center'>
    //             <MDBContainer className='my-10 flex flex-col justify-center items-center w-[50%]'>
    //                 <MDBCarousel showControls showIndicators>
    //                     <MDBCarouselItem itemId={1} className="active text-center flex items-center flex-col">
    //                         <Image
    //                             src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
    //                             alt='Customer Image'
    //                             width={120}
    //                             height={120}
    //                             className='rounded-[50%] shadow-2xl mb-4'
    //                         />
    //                         <MDBRow>
    //                             <MDBCol>
    //                                 <h5 className='mb-3'>Maria Kate</h5>
    //                                 <p className="text-gray-500">
    //                                     <FaQuoteLeft className="text-[20px]"/>
    //                                     <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
    //                                     et deleniti nesciunt sint eligendi reprehenderit reiciendis,
    //                                     quibusdam illo, beatae quia fugit consequatur laudantium velit
    //                                     magnam error. Consectetur distinctio fugit doloremque.</span>
    //                                 </p>
    //                             </MDBCol>
    //                         </MDBRow>
    //                     </MDBCarouselItem>
    //                 </MDBCarousel>
    //             </MDBContainer>
    //         </div>

    //         // <div className='mt-10 mb-10'>
    //         //     <Image
    //         //         src='/logo.png'
    //         //         alt='Customer Image'
    //         //         width={120}
    //         //         height={120}
    //         //         className=''
    //         //     />
    //         //     Testimonials
    //         // </div>
    //         // time kitna bi - portfolio is very important
    //         // shivji kaho, udemy
    //         // ancient healings of shiva
    //         // ohmnamha shivaye
    //         // track, difference between today and, 
    //     )
}

export default Testimonials;