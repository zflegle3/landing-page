import React, { useState } from 'react';

import {ReactComponent as OpenSvg} from "../images/icon-arrow.svg"

function FaqTab(props) {
    //props.data

    const [status , setStatus] = useState(false);



    console.log(props.data);
    console.log(props.status);


    const handleOpen = (e) => {
        console.log(props.data.id);
        console.log("open");
        // props.openTab(props.data.id);
        setStatus(true);
    }

    const handleClose = (e) => {
        console.log(e);
        console.log("close");
        // props.openTab(props.data.id);
        setStatus(false);
    }


    console.log(props.data);
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
            <div id={`tab-item-${props.data.id}`} class="open">
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
