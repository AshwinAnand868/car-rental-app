import { FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Newsletter from "./Newsletter";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
    return (
        <div className='block bg-blue-600 text-white w-full mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 ml-4 pb-[50px] pt-[50px] mb-3'>
                <div className='px-10'>
                    <h1 className='text-[20px] mb-2 font-bold'>About Us</h1>
                    <p>
                        Getting dressed up and traveling with good friends makes for a shared, unforgettable experience.
                    </p>
                </div>
                <div className='px-10'>
                    <h1 className='text-[20px] mb-2 font-bold'>Contact Info</h1>
                    <p className='flex flex-column gap-3'>
                        <FaPhoneAlt className='mt-1' />
                        <span>416-888-9999</span>
                    </p>
                    <p className='mt-2 flex flex-column gap-3'>
                        <MdLocationPin className='mt-1 text-[20px]' />
                        <span>123 Fake St. Brampton, Ontario</span>
                    </p>
                    <p className='mt-2 flex flex-column gap-3'>
                        <FaRegCalendarAlt className='mt-1' />
                        <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
                    </p>
                    <div className="mt-5">
                        {/* <SocialMediaIcons /> */}
                    </div>
                </div>
                <div className='px-10'>
                    <h1 className='text-[20px] mb-2 font-bold'>Newsletter</h1>
                    <p>Don't miss a thing! Sign up to receive daily deals</p>
                    <Newsletter />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-[13px] border-t border-white px-16 pt-6 pb-6 w-[95%] ">
                    <div className="">
                        © Copyright Rent Smart Cars - 2024
                    </div>
                    <div className="flex flex-wrap float-right mt-[-20px]">
                        <ul className="list-none flex flex-wrap gap-8">
                            <li className="menu-item">
                                <Link href='/'>About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link href='/'>FAQs</Link>
                            </li>
                            <li className="menu-item">
                                <Link href='/'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer