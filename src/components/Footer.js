//Components
import { ReactComponent as LogoSvg } from '../images/logo-bookmark.svg';
import { ReactComponent as FacebookSvg } from '../images/icon-facebook.svg';
import { ReactComponent as TwitterSvg } from '../images/icon-twitter.svg';

function Footer(props) {
    //props.open
    //props.closeNav()

    return (
            <footer>
                <LogoSvg className="logo-footer" />
                <div className="footer-links">
                    <p onClick={props.closeNav}>FEATURES</p>
                    <p onClick={props.closeNav}>PRICING</p>
                    <p onClick={props.closeNav}>CONTACT</p>
                </div>

                <div className="footer-icons">
                    <FacebookSvg />
                    <TwitterSvg />
                </div>
            </footer>
    );
}

export default Footer;
