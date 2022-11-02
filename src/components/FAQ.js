import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
//Components
import FaqTab from "./FaqTab";
//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function FAQ(props) {

    const tabInfo = [
        {id: 1,
        title: "What is Bookmark?",
        text: "Vivamus lectus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris argue massa, ultricies non ligula. Suspendisse imperdie vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
        },
        {id: 2,
        title: "How can I request a new Browser?",
        text: "Vivamus lectus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris argue massa, ultricies non ligula. Suspendisse imperdie vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
        },
        {id: 3,
        title: "Is there a mobile app?",
        text: "Vivamus lectus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris argue massa, ultricies non ligula. Suspendisse imperdie vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
        },
        {id: 4,
        title: "What about other Chromimum browsers?",
        text: "Vivamus lectus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris argue massa, ultricies non ligula. Suspendisse imperdie vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
        },
    ]

    let questionComps = tabInfo.map((questionData) =>
        <FaqTab key={uuidv4()} data={questionData}/>
    );

    useEffect(() => {
        gsap.to(".faq-container", {
            scrollTrigger: {
                trigger: ".faq-container",
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
        <div className="faq-container">
            <div className="container-sub-a">
                <h2>Fequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
            <div className="dropdown-container">
                {questionComps}
            </div>
            <div className="button-container">
                <button>More Info</button>
            </div>

        </div>
    );
}

export default FAQ;