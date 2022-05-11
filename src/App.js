import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header totalItems={0} />
    </div>
  );
}

export default App;
