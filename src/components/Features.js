import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import FeatureItem from "../components/FeatureItem";

function Features() {
    
    const tabInfo = [
        {title: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manager your favorite sites."
        },
        {title: "Intelligent Search",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {title: "Share your bookmarks",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        },
    ]


    const selectTab = (e) => {
        // e.preventDefault();
        console.log(e.target.id);
        let linksAll = document.querySelectorAll("#feature-tab");
        console.log(linksAll);
        for (let i=0; i< linksAll.length; i++) {
            console.log(i);
            console.log(linksAll[i]);
            if (linksAll[i].className === "tab-select") {
                console.log(linksAll[i], "was selected")
                linksAll[i].className =  "";
            }
        };
        e.target.classList.add("tab-select")
    }


  return (
    <div className="features">
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
            {/* <Router> */}
                <Routes>
                        <Route exact path="/bookmark" element={<FeatureItem tabData={tabInfo[0]}/>}/>
                        <Route exact path="/search" element={<FeatureItem tabData={tabInfo[1]}/>}/>
                        <Route exact path="/share" element={<FeatureItem tabData={tabInfo[2]}/>}/>
                        <Route path="*" element={<Navigate to="/bookmark" replace />}/>
                </Routes>
            {/* </Router> */}
        </div>
        </Router>

    </div>
  );
}

export default Features;
