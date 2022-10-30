
function FeatureItem(props) {
    //props.tabData

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
}

export default FeatureItem;
