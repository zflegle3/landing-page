
import "./styles/styles.scss";
import Nav from "./components/Nav";
import SectionRight from "./components/SectionRight";
import SectionLeft from "./components/SectionLeft";
import Features from "./components/Features";
import Download from "./components/Download"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="App">
      <Nav />
      <SectionRight />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      {/* <SectionLeft /> */}
    </div>
  );
}

export default App;
