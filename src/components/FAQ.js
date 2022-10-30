import { v4 as uuidv4 } from 'uuid';

import React, { useState } from 'react';

import FaqTab from "./FaqTab"

import { ReactComponent as ChromeSvg  } from '../images/logo-chrome.svg';
import { tab } from "@testing-library/user-event/dist/tab";

function FAQ(props) {

    const tabInfo = [
        {id: 1,
        title: "What is Bookmark?",
        text: "TEXT CONTENT ABOUT THE FAQ",
        },
        {id: 2,
        title: "How can I request a new Browser?",
        text: "TEXT CONTENT ABOUT THE FAQ",
        },
        {id: 3,
        title: "Is there a mobile app?",
        text: "TEXT CONTENT ABOUT THE FAQ",
        },
        {id: 4,
        title: "What about other Chromimum browsers?",
        text: "TEXT CONTENT ABOUT THE FAQ",
        },
    ]

    let questionComps = tabInfo.map((questionData) =>
        <FaqTab key={uuidv4()} data={questionData}/>
    );


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