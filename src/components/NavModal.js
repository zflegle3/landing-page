import ReactDom from "react-dom";

import { ReactComponent as LogoSvg } from '../images/logo-bookmark.svg';
import { ReactComponent as CloseSvg } from '../images/icon-close.svg';
import { ReactComponent as FacebookSvg } from '../images/icon-facebook.svg';
import { ReactComponent as TwitterSvg } from '../images/icon-twitter.svg';

function NavModal(props) {
    //props.open
    //props.closeNav()

    if (!props.open) return null

    return ReactDom.createPortal(
        <>
            <div className="nav-modal">
                <div className="modal-header">
                    <LogoSvg />
                    <button onClick={props.closeNav}>
                        <CloseSvg />
                    </button>
                </div>
                <div className="modal-links">
                    <p onClick={props.closeNav}>FEATURES</p>
                    <p onClick={props.closeNav}>PRICING</p>
                    <p onClick={props.closeNav}>CONTACT</p>
                    <p onClick={props.closeNav} className="selected">LOGIN</p>
                </div>

                <div className="modal-footer">
                    <FacebookSvg />
                    <TwitterSvg />
                </div>
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default NavModal;
