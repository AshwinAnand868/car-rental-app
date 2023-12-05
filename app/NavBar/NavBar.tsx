"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs'
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import Link from 'next/link';
import classNames from 'classnames';

function NavBar() { 
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

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
        'p-5',
        'shadow-sm',
        'border-b',
        {
            'bg-white': openSideMenu
        }
    )

    return (
        <div className={navbarClassNames}>
            <Burger openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
            <Image src='/logo.png' alt="Logo" width={100} height={100}/>
            <Menu  openSideMenu={openSideMenu}  setOpenSideMenu={setOpenSideMenu} />
            <UserButton />
        </div>
    )
}

export default NavBar;