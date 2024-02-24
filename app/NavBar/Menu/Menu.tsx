"use client"
import React, { useRef } from "react";
import Link from 'next/link';
import './Menu.css'
import '../NavBar.css'
import classNames from "classnames";
import { usePathname } from 'next/navigation'
import { Popup } from "semantic-ui-react";
import 'semantic-ui-css/components/popup.min.css';

interface MenuProps {
    openSideMenu: boolean,
    setOpenSideMenu: (value: boolean) => void
}

export default function Menu({ openSideMenu, setOpenSideMenu }: MenuProps) {

    const ref = useRef<HTMLAnchorElement>(null);
    const currentPath = usePathname();

    const handleLinkClick = () => {
        setOpenSideMenu(false);
    }

    return (
        <div className={'custom-menu md:tw-flex md:tw-justify-between md:tw-gap-[3.5rem] ' + (openSideMenu ? 'show-custom-menu' : '')}>
            <Link href='/'
                className={"nav-link " + (currentPath === "/" ? "active-link" : "")}
                aria-label='home'
                onClick={handleLinkClick}
                ref={ref}>Home</Link>

            <Popup
                trigger={
                    <span className={"nav-link " + (currentPath === "/History" ? "active-link" : "")}
                        aria-label='history'>History</span>
                }
                content='Feature Coming Soon &#128521;'
                position='bottom left'
            />

            <Popup
                trigger={
                    <span className={"nav-link " + (currentPath === "/ContactUs" ? "active-link" : "")}
                        aria-label='contact'>Contact</span>
                }
                content='Feature Coming Soon &#128521;'
                position='bottom left'
            />
        </div>
    )
}