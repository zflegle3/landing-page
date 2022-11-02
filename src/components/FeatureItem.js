
function FeatureItem(props) {
    //props.tabData

    let vw = window.innerWidth;
    if (vw <760) {
        return (
            <div className={`feature-item-${props.tabData.id}`}>
    
                <div className="container-sub-b">
                    <div className="svg-hero-b"></div>
                    <div className="background-left"></div>
                </div>

                <div className="container-sub-a">
                    <h2>{props.tabData.title}</h2>
                    <p>{props.tabData.text}</p>
                </div>

            </div>
        );
    } else {
        return (
            <div className={`feature-item-${props.tabData.id}`}>
    
                <div className="container-sub-b">
                    <div className="svg-hero-b"></div>
                    <div className="background-left"></div>
                </div>

                <div className="container-sub-a">
                    <h2>{props.tabData.title}</h2>
                    <p>{props.tabData.text}</p>
                    <button>More Info</button>
                </div>

            </div>
        );

    }

}

export default FeatureItem;
