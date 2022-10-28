
import { ReactComponent as ContentSvg } from '../images/illustration-hero.svg';


function SectionLeft() {


    let vw = window.screen.width;
    return (
      <div className="container-main">
        <div className="container-sub-a">
            <h2>Bookmark in One Click</h2>
            <p>Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access then on the go.</p>
        </div>
        <div className="container-sub-b">
            {/* <ContentSvg/> */}
            <div className="svg-hero-b"></div>
            <div className="background-left"></div>
        </div>
      </div>
    );
  }
  
  export default SectionLeft;
  