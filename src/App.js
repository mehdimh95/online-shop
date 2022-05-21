import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import SubHeder from "./components/SubHeder";
import TopBody from "./components/TopBody";
import Body from "./components/BodyElement";
import SubBody from "./components/SubBody";
import Footer from "./components/Footer";
import CartBody from "./components/CartBody";
import ButtonsBody from "./components/ButtonsBody";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const totalPrice = list.reduce(
    (prev, next) => prev + next.price * (next.count ?? 0),
    0
  );
  const totalItems = list.reduce((prev, next) => prev + (next?.count ?? 0), 0);

  // update array state
  const minusHandler = (id) => () => {
    const updatedList = [...list];
    const index = updatedList.findIndex((item) => item.id === id);
    const currentItem = updatedList[index];
    if (currentItem.count > 0) {
      currentItem.count -= 1;
      setList(updatedList);
    }
  };

  const plusHandler = (id) => () => {
    const updatedList = [...list];
    const index = updatedList.findIndex((item) => item.id === id);
    updatedList[index].count
      ? (updatedList[index].count += 1)
      : (updatedList[index].count = 1);
    setList(updatedList);
  };

  const deleteHandler = (id) => () => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div className="App">
      <TopBar />
      <Header totalItems={totalItems} />
      <div className="container-fluid bg-dark text-white bg-white">
        <div className="container">
          <SubHeder />
          <TopBody />
          <div className="row">
            <div className="col-12 col-lg-8 order-2 order-lg-1 table-responsive">
              {list.length ? (
                <table className="table table-borderless">
                  <thead
                    style={{
                      borderBottom: "1px solid #CACDD8",
                    }}
                  >
                    <tr>
                      <th style={{ width: "15%" }}>Item</th>
                      <th
                        className="d-none d-lg-table-cell"
                        style={{ width: "35%" }}
                      ></th>
                      <th style={{ width: "18%" }}>Price</th>
                      <th style={{ width: "14%" }}>Qty</th>
                      <th style={{ width: "12%" }}>Subtotal</th>
                      <th style={{ width: "6%" }}></th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      borderBottom: "1px solid #CACDD8",
                    }}
                  >
                    {list.map((item) => (
                      <Body
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        key={item.id}
                        count={item.count}
                        minusHandler={minusHandler(item.id)}
                        plusHandler={plusHandler(item.id)}
                        onDelete={deleteHandler(item.id)}
                      />
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="d-flex justify-content-center align-items-center py-5">
                  <div className="spinner-border text-dark  " role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
            <CartBody totalPrice={totalPrice} />
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
