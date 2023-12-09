import React, { useRef, useState } from "react";
import Link from 'next/link';
import './Menu.css'
import classNames from "classnames";
import { useSelectedLayoutSegment } from 'next/navigation'
import { Popup } from "semantic-ui-react";
import 'semantic-ui-css/components/popup.min.css';

interface MenuProps {
    openSideMenu: boolean,
    setOpenSideMenu: (value: boolean) => void
}

export default function Menu({ openSideMenu, setOpenSideMenu }: MenuProps) {

    const ref = useRef<HTMLAnchorElement>(null);
    const activeSegment = useSelectedLayoutSegment()

    const handleLinkClick = () => {
        setOpenSideMenu(false);
    }

    const menuClassNames = classNames(
        'custom-menu',
        'md:flex',
        'md:justify-between',
        'md:gap-5',
        {
            'show-custom-menu': openSideMenu,
        }
    )

    return (
        <div className={menuClassNames}>
            <Link href='/'
                className={"nav-link " + (activeSegment === null ? "active-link" : "")}
                aria-label='home'
                onClick={handleLinkClick}
                ref={ref}>Home</Link>

            <Popup
                trigger={
                    <h2 className={"nav-link " + (activeSegment === "History" ? "active-link" : "")}
                        aria-label='history'>History</h2>
                }
                content='Feature Coming Soon &#128521;'
                position='bottom left'
            />

            <Popup
                trigger={
                    <h2 className={"nav-link " + (activeSegment === "ContactUs" ? "active-link" : "")}
                        aria-label='contact us'>Contact Us</h2>
                }
                content='Feature Coming Soon &#128521;'
                position='bottom left'
            />
        </div>
    )
}