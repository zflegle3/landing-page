import React, { useState } from 'react';

import { ReactComponent as LogoSvg } from '../images/logo-bookmark.svg';
import { ReactComponent as HamburgerSvg } from '../images/icon-hamburger.svg';

import NavModal from "../components/NavModal"

function Nav() {
    const [open, setOpen] = useState(false);





    let vw = window.screen.width;
    console.log(vw);

    const openNav = () => {
        console.log("Open Nav");
        //set nav visability to hidden
        //open nav modal in portal
        document.getElementById("mobile-header").classList.add("hide");
        setOpen(true);
    }

    const closeNav = () => {
        console.log("Close Nav");
        //set nav visability to visable
        //close nav modal in portal
        document.getElementById("mobile-header").classList.remove("hide");
        setOpen(false);
    }

    if (vw > 760) {
        return (
            <header>

            </header>
        );
    } else {
        return(
            <header id="mobile-header">
                <LogoSvg />

                <button onClick={openNav}>
                    <HamburgerSvg />
                </button>
                <NavModal open={open} closeNav={closeNav}/>
            </header>
        );
    }
}

export default Nav;
