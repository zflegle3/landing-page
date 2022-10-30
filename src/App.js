
import "./styles/styles.scss";
import Nav from "./components/Nav";
import SectionRight from "./components/SectionRight";
import SectionLeft from "./components/SectionLeft";
import Features from "./components/Features";
import Download from "./components/Download"

function App() {

  return (
    <div className="App">
      <Nav />
      <SectionRight />
      <Features />
      <Download />
      {/* <SectionLeft /> */}
    </div>
  );
}

export default App;
