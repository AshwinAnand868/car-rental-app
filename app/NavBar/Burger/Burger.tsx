import React from 'react';
import './Burger.css';
import classNames from 'classnames';

interface BurgerProps {
    openSideMenu: boolean,
    setOpenSideMenu: (value: boolean) => void;
}

const Burger = ({openSideMenu, setOpenSideMenu}: BurgerProps) => {

    return (
        <div className="burger md:!tw-hidden" onClick={() => setOpenSideMenu(!openSideMenu)}>
            <div className={"slice " + (openSideMenu ? "slice-1" : "")}></div>
            <div className={"slice " + (openSideMenu ? "slice-2" : "")}></div>
            <div className={"slice " + (openSideMenu ? "slice-3" : "")}></div>
        </div>
    )
}

export default Burger;
