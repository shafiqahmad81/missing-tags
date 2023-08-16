import Chart from "./component/chart/Chart";
import Logo from "./component/logo/Logo";
import Swich from "./component/swich/Swich";
import ChartImage from "../src/image/chart.png";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="headerWrap">
        <div className="wrap">
          <Swich />
          <Logo />
        </div>
        <Chart />
      </header>
      <section className="sectionWrap">
        <img src= {ChartImage} alt="name" />
      </section>
    </div>
  );
}

export default App;
