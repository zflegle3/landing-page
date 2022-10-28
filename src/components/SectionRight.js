
import { ReactComponent as ContentSvg } from '../images/illustration-hero.svg';


function SectionRight() {


    let vw = window.screen.width;
    return (
      <div className="container-main">
        <div className="container-sub-a">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="button-container">
                <button className="btn-a">Get it on Chrome</button>
                <button className="btn-b">Get it on Firefox</button>
            </div>
        </div>
        <div className="container-sub-b">
            {/* <ContentSvg/> */}
            <div className="svg-hero-a"></div>
            <div className="background-right"></div>
        </div>
      </div>
    );
  }
  
  export default SectionRight;
  