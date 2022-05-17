import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import SubHeder from "./components/SubHeder";
import TopBody from "./components/TopBody";
import SubBody from "./components/SubBody";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header totalItems={0} />
      <div className="container-fluid bg-dark text-white bg-white">
        <div className="container">
          <SubHeder />
          <TopBody />
        </div>
      </div>
      <SubBody />
      <Footer />
    </div>
  );
}

export default App;
