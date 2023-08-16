import Chart from "./component/chart/Chart";
import ChartImage from "../src/image/chart.png";
import "./index.css";
import Header from "./component/header/Header";

function App() {
  return (
    <div className="App">
      <header className="headerWrap">
        <Header />
        <Chart />
      </header>
      <section className="sectionWrap">
        <img src= {ChartImage} alt="name" />
      </section>
    </div>
  );
}

export default App;
