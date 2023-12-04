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
        console.log(activeSegment);
        
    }

    const menuClassNames = classNames(
        'custom-menu',
        'md:flex',
        'md:gap-5',
        {
            'hide-custom-menu': openSideMenu,
        }
    )

    return (
        <div className={menuClassNames}>
            <Link href='../Home'
                className={"nav-link " + (activeSegment === "Home" ? "active-link" : "")}
                aria-label='home'
                onClick={handleLinkClick}
                ref={ref}>Home</Link>
            <Link 
                href='../About' 
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