import { FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Newsletter from "./Newsletter";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {

    const links = [
        [
            { label: "Explore", key: "header-1" },
            { label: "About Us", key: "item-1-1", url: " " },
            { label: "Blog", key: "item-1-2", url: " " },
            { label: "Contact", key: "item-1-3", url: " " },
            { label: "Pricing", key: "item-1-4", url: " " },
            { label: "Testimonials", key: "item-1-5", url: " " },
        ],
        [
            { label: "Support", key: "header-2" },
            { label: "Help center", key: "item-2-1", url: " " },
            { label: "Terms of service", key: "item-2-2", url: " " },
            { label: "Legal", key: "item-2-3", url: " " },
            { label: "Privacy policy", key: "item-2-4", url: " " },
            { label: "Status", key: "item-2-5", url: " " },
        ],
    ]

    return (
        <div className='py-16 p-7 bg-blue-600 text-white w-full gap-4'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative w-full">
                <div>
                    <div>
                        <span className="text-3xl font-bold">
                            Rent Smart Cars
                        </span>
                    </div>
                    <div className="text-gray-400">
                        <span>Copyright © 2023. All rights reserved</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <SocialMediaIcons />
                    </div>
                </div>
                <div className="mx-2 grid grid-cols-2 py-5 sm:py-0 w-full">
                    {links.map((col, index) => {
                        return (
                            <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                                {col.map((link, index) => {
                                    return (
                                        <li
                                            key={`link-${col}-${index}`}
                                            className={`text-gray-400 ${link.key === "header-1" || link.key === "header-2"
                                                ? "text-2xl text-white"
                                                : ""
                                                }`}
                                        >
                                            {link.url ?
                                                <Link href={link.url} target="_blank" className="cursor-pointer">
                                                    {link.label}
                                                </Link>
                                                : <>
                                                    {link.label}
                                                </>}

                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
                <div className="col-span-1 mt-0 sm:mt-4 lg:mt-0 sm:mx-auto md:col-span-2 lg:col-span-1">
                    <Newsletter />
                </div>
            </div>
        </div>
    )
}

export default Footer