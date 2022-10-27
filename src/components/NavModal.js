import ReactDom from "react-dom";
import React, { useState } from 'react';

import { ReactComponent as LogoSvg } from '../images/logo-bookmark.svg';
import { ReactComponent as CloseSvg } from '../images/icon-close.svg';

function NavModal(props) {
    //props.open
    //props.closeNav()

    if (!props.open) return null

    return ReactDom.createPortal(
        <>
            <div className="nav-modal">
                <header>
                    <LogoSvg />

                    <button onClick={props.closeNav}>
                        <CloseSvg />
                    </button>
                </header>

            </div>
        </>,
        document.getElementById("portal")
    );
}

export default NavModal;
