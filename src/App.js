
import "./styles/reset.scss";
import "./styles/styles.scss";
import "./styles/desktop.scss";

import Nav from "./components/Nav";
import SectionRight from "./components/SectionRight";
// import SectionLeft from "./components/SectionLeft";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from  "./components/Footer";

function App() {

  return (
    <div className="App">
      <Nav />
      <SectionRight />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
      {/* <SectionLeft /> */}
    </div>
  );
}

export default App;
