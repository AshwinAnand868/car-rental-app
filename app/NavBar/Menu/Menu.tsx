import React, { useRef, useState } from "react";
import Link from 'next/link';
import './Menu.css'
import classNames from "classnames";
import { useSelectedLayoutSegment } from 'next/navigation'

interface MenuProps {
    openSideMenu: boolean,
    setOpenSideMenu: (value: boolean) => void
}

export default function Menu({ openSideMenu, setOpenSideMenu }: MenuProps) {

    // const [active, setActive] = useState(false);
    const ref = useRef<HTMLAnchorElement>(null);
    const activeSegment = useSelectedLayoutSegment()

    const handleLinkClick = () => {
        setOpenSideMenu(false);
    }

    const menuClassNames = classNames(
        'custom-menu',
        'md:flex',
        'md:gap-5',
        {
            'show-custom-menu': openSideMenu,
        }
    )

    return (
        <div className={menuClassNames}>
            <Link href='../'
                className={"nav-link " + (activeSegment === null ? "active-link" : "")}
                aria-label='home'
                onClick={handleLinkClick}
                ref={ref}>Home</Link>
            <Link 
                href='../History' 
                className={"nav-link " + (activeSegment === "History" ? "active-link" : "")}
                aria-label='history'
                onClick={handleLinkClick}>History</Link>
            <Link 
                href='' 
                className={"nav-link " + (activeSegment === "ContactUs" ? "active-link" : "")}
                aria-label='contact us'
                onClick={handleLinkClick}>Contact Us</Link>
        </div>
    )
}