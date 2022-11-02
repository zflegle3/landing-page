import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
//Components
import ExtCard from "./ExtCard"
//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Download(props) {

    const tabInfo = [
        {id: 1,
        title: "Add to Chrome",
        text: "Minimum version 62",
        },
        {id: 2,
        title: "Add to Firefox",
        text: "Minimum version 55",
        },
        {id: 3,
        title: "Add to Opera",
        text: "Minimum version 46",
        },
    ]

    let extensionComps = tabInfo.map((extension) =>
        <ExtCard key={uuidv4()} data={extension}/>
    );

    useEffect(() => {
        gsap.to(".extensions", {
            scrollTrigger: {
                trigger: ".extensions",
                start: "top 75%",
                // markers: true,
                toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 1
        })
    },[]);

  return (
    <div className="extensions">
        <div className="container-sub-a">
            <h2>Download the Extension</h2>
            <p>We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.</p>
        </div>
        <div className="ext-card-container">
            {extensionComps}
        </div>

    </div>
  );
}

export default Download;
