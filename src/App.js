import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import SubHeder from "./components/SubHeder";
import TopBody from "./components/TopBody";
import SubBody from "./components/SubBody";
import Footer from "./components/Footer";
import CartBody from "./components/CartBody";
import ButtonsBody from "./components/ButtonsBody";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header totalItems={0} />
      <div className="container-fluid bg-dark text-white bg-white">
        <div className="container">
          <SubHeder />
          <TopBody />
          <div className="row">
            <div className="col-12 col-lg-8 order-2 order-lg-1 table-responsive">
            </div>
            <CartBody totalPrice={0} />
          </div>
          <ButtonsBody />
        </div>
      </div>
      <SubBody />
      <Footer />
    </div>
  );
}

export default App;
