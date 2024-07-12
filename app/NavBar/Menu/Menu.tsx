"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from "react";
import 'semantic-ui-css/components/popup.min.css';
import { Popup } from "semantic-ui-react";
import '../NavBar.css';
import './Menu.css';

interface MenuProps {
    openSideMenu: boolean,
    setOpenSideMenu: (value: boolean) => void
}

const links = [
    { name: 'Home', href: '/' },
]

export default function Menu({ openSideMenu, setOpenSideMenu }: MenuProps) {

    const ref = useRef<HTMLAnchorElement>(null);
    const currentPath = usePathname();

    const handleLinkClick = () => {
        setOpenSideMenu(false);
    }

    return (
        <div className={'custom-menu md:tw-flex md:tw-justify-between md:tw-gap-[3.5rem] ' + (openSideMenu ? 'show-custom-menu' : '')}>
            {links.map((link) => {
                return (
                    <Link 
                        key={link.name}
                        href={link.href}
                        className={"nav-link " + (currentPath === link.href ? "active-link" : "")}
                        onClick={handleLinkClick}
                        ref={ref}>{link.name}</Link>
                )
            })}

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
            {/* <Link href='/ShoppingCart'></Link> */}
        </div>
    )
}