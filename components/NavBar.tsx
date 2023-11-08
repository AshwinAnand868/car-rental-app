import React, { Component } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs'

function NavBar() {
    return (
        <div>
            <Image src='/logo.png' alt="Logo" width={100} height={100}/>
            <div>
                <h2>Home</h2>
                <h2>History</h2>
                <h2>Contact Us</h2>
            </div>
            <UserButton />
        </div>
    )
}

export default NavBar;