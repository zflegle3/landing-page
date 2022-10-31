
import { ReactComponent as ChromeSvg } from '../images/logo-chrome.svg';
import { ReactComponent as FirefoxSvg } from '../images/logo-firefox.svg';
import { ReactComponent as OperaSvg } from '../images/logo-opera.svg';
import { ReactComponent as DotBorderSvg } from "../images/bg-dots.svg"


function ExtCard(props) {

    let svgSrc;
    switch (props.data.id) {
        case 1:
            svgSrc = <ChromeSvg />;
            break;
        case 2:
            svgSrc = <FirefoxSvg />;
            break;
        case 3:
            svgSrc = <OperaSvg />;
            break;
        default: 
            break;
    }

  return (
    <div className={`ext-card-item-${props.data.id}`}>
        {svgSrc}
        <h2>{props.data.title}</h2>
        <p>{props.data.text}</p>
        <DotBorderSvg />
        <div className="card-btn-container">
            <button>Add & Install Extension</button>
        </div>
    </div>
  );
}

export default ExtCard;
