import React, { useState } from 'react';

import { ReactComponent as LogoSvg } from '../images/logo-bookmark.svg';
import { ReactComponent as HamburgerSvg } from '../images/icon-hamburger.svg';

import NavModal from "../components/NavModal"

function Nav() {
    const [open, setOpen] = useState(false);

    let vw = window.screen.width;

    const openNav = () => {
        //open nav modal in portal
        document.getElementById("mobile-header").classList.add("hide");
        setOpen(true);
    }

    const closeNav = () => {
        //close nav modal in portal
        document.getElementById("mobile-header").classList.remove("hide");
        setOpen(false);
    }

    if (vw > 760) {
        return (
            <header>
                <LogoSvg />
                <div className="nav-links">
                    <a href="">FEATURES</a>
                    <a href="">PRICING</a>
                    <a href="">CONTACT</a>
                    <button>LOGIN</button>
                </div>
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
