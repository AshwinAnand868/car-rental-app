"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs'
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

function NavBar() { 
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-between p-5 px-5 shadow-sm border-b">
            <Burger openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} />
            <Image src='/logo.png' alt="Logo" width={100} height={100}/>
            <Menu  openSideMenu={openSideMenu}  setOpenSideMenu={setOpenSideMenu} />
            <UserButton />
        </div>
    )
}

export default NavBar;