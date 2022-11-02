import React, { useState } from 'react';
import {ReactComponent as OpenSvg} from "../images/icon-arrow.svg"

function FaqTab(props) {
    //props.data
    const [status , setStatus] = useState(false);

    const handleOpen = (e) => {
        setStatus(true);
    }

    const handleClose = (e) => {
        setStatus(false);
    }

    if (!status) { //closed state
        return (
            <div id={`tab-item-${props.data.id}`} >
                <div className="tab-title" onClick={handleOpen}>
                    <h2>{props.data.title}</h2>
                    <OpenSvg />
                </div>
                <div className="tab-content">
                </div>
            </div>
        );
    } else { //open state
        return (
            <div id={`tab-item-${props.data.id}`} className="open">
                <div className="tab-title" onClick={handleClose}>
                    <h2>{props.data.title}</h2>
                    <OpenSvg />
                </div>
                <div className="tab-content open">
                    <p>{props.data.text}</p>
                </div>
            </div>
        );

    }

}

export default FaqTab;
