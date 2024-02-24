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
        <div className='tw-py-16 tw-p-7 tw-bg-blue-600 tw-text-white tw-w-full tw-gap-4'>
            <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-relative tw-w-full">
                <div>
                    <div>
                        <span className="tw-text-3xl tw-font-bold">
                            Rent Smart Cars
                        </span>
                    </div>
                    <div className="tw-text-gray-400">
                        <span>Copyright © 2024. All rights reserved</span>
                    </div>
                    <div className="tw-flex tw-items-center tw-space-x-3">
                        <SocialMediaIcons />
                    </div>
                </div>
                <div className="tw-mx-2 tw-grid tw-grid-cols-2 tw-py-5 sm:tw-py-0 tw-w-full">
                    {links.map((col, index) => {
                        return (
                            <ul className={`tw-col tw-col-${index + 1}`} key={`tw-col-${index}`}>
                                {col.map((link, index) => {
                                    return (
                                        <li
                                            key={`link-${col}-${index}`}
                                            className={`tw-text-gray-400 ${link.key === "header-1" || link.key === "header-2"
                                                ? "tw-text-2xl tw-text-white"
                                                : ""
                                                }`}
                                        >
                                            {link.url ?
                                                <Link href={link.url} target="_blank" className="tw-cursor-pointer tw-no-underline tw-text-gray-400">
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
                <div className="tw-col-span-1 tw-mt-0 sm:tw-mt-4 lg:tw-mt-0 sm:tw-mx-auto md:tw-col-span-2 lg:tw-col-span-1">
                    <Newsletter />
                </div>
            </div>
        </div>
    )
}

export default Footer