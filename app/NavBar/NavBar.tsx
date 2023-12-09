"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link';
import classNames from 'classnames';
import Burger from './burger/Burger';
import Menu from './menu/Menu';

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
            <Link href='../'><Image src='/logo.png' alt="Logo" width={100} height={100}/></Link>
            <Menu  openSideMenu={openSideMenu}  setOpenSideMenu={setOpenSideMenu} />
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <div>
                    <Link href='sign-in' className='rounded-2xl border border-gray-400 px-4 py-2 hover:bg-blue-200 mr-4'>
                        Sign In
                    </Link>
                    <Link href='sign-up' className='rounded-2xl border border-gray-400 px-4 py-2 hover:bg-blue-200 mr-4'>
                        Sign Up
                    </Link>
                </div>
                
                {/* <SignInButton>
                    <button className='rounded border border-gray-400 px-3 py-0.5'>
                        Sign in
                    </button>
                </SignInButton> */}
            </SignedOut>
        </div>
    )
}

export default NavBar;