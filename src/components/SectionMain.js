
import { ReactComponent as ContentSvg } from '../images/illustration-hero.svg';


function SectionMain() {


    return (
      <div className="container-main">
        <div className="container-sub-a">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize yout favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="button-container">
                <button>Get it on Chrome</button>
                <button>Get it on Firefox</button>
            </div>
        </div>
        <div className="container-sub-b">
            <ContentSvg/>
        </div>
      </div>
    );
  }
  
  export default SectionMain;
  