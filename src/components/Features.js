import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import { useEffect } from 'react';
//Components
import FeatureItem from "../components/FeatureItem";
//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Features() {
    
    const tabInfo = [
        {id: 1,
        title: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manager your favorite sites."
        },
        {id: 2,
        title: "Intelligent Search",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {id: 3,
        title: "Share your bookmarks",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        },
    ]

    const selectTab = (e) => {
        let linksAll = document.querySelectorAll("#feature-tab");
        for (let i=0; i< linksAll.length; i++) {
            if (linksAll[i].className === "tab-select") {
                linksAll[i].className =  "";
            }
        };
        e.target.classList.add("tab-select")
    }

    useEffect(() => {
        //selects first tab on page load
        let linksAll = document.querySelectorAll("#feature-tab");
        if (linksAll[0].className !== "tab-select") {
            linksAll[0].className =  "tab-select";
        }
    });

    useEffect(() => {
        gsap.to("#features", {
            scrollTrigger: {
                trigger: "#features",
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
        <div id="features" className="features">
            <div className="container-sub-a">
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access then on the go.</p>
            </div>
            <Router>
            <ul>
                    <li className="feature-link">
                        <Link to="/bookmark" id="feature-tab" onClick={selectTab}>Simple Bookmarking</Link>
                    </li>
                    <li className="feature-link">
                        <Link to="/search" id="feature-tab" onClick={selectTab}>Speedy Searching</Link>
                    </li>
                    <li className="feature-link">
                        <Link to="/share" id="feature-tab" onClick={selectTab}>Easy Sharing</Link>
                    </li>
            </ul>
            <div className="features-content">
                <Routes>
                        <Route exact path="/bookmark" element={<FeatureItem tabData={tabInfo[0]}/>}/>
                        <Route exact path="/search" element={<FeatureItem tabData={tabInfo[1]}/>}/>
                        <Route exact path="/share" element={<FeatureItem tabData={tabInfo[2]}/>}/>
                        <Route path="*" element={<Navigate to="/bookmark" replace />}/>
                </Routes>
            </div>
            </Router>

        </div>
    );
}

export default Features;
