"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link';
import classNames from 'classnames';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import { usePathname } from 'next/navigation';

function NavBar() { 
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
    const currentPath = usePathname();
    useEffect(() => {
        if(openSideMenu) {
            document.body.style.overflow = 'hidden';
            document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.backgroundColor = 'white';
        }
    }, [openSideMenu]);

    const navbarClassNames = classNames(
        'flex',
        'items-center',
        'justify-between',
        'pt-5 px-5 pb-[0.8rem]',
        'shadow-sm',
        'border-b',
        {
            'bg-white': openSideMenu
        }
    )

    return (
        <div className={navbarClassNames}>
            <Burger openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
            <Link href='../'><Image src='/logo.png' alt="Logo" width={100} height={100}/></Link>
            <Menu openSideMenu={openSideMenu}  setOpenSideMenu={setOpenSideMenu} />
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>
            </SignedIn>
            <SignedOut>
                <div>
                    <Link href='../SignIn' className={'nav-link ' + (currentPath === "/SignIn" ? 'active-link' : '')}>
                        Sign In
                    </Link>
                    <Link href='../SignUp' className={'nav-link ' + (currentPath === "/SignUp" ? 'active-link' : '')}>
                        Sign Up
                    </Link>
                </div>
            </SignedOut>
        </div>
    )
}

export default NavBar;