import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import Singleproduct from "./component/Singleproduct/singleproduct";
import Accsessuar from "./component/accsessuars/Accsessuars";
import Filterproductpage from "./component/Filterproductpage/filterproductpage";
import Cartandwish from "./component/cartandwish/cartandwish";
import Restorans from "./component/restorans/restorans";
import Cart from "./component/Cart/Cart";
import Wishlist from "./component/wishlist/wishlist";
import Login from "./component/Login/Login";
import Arrow from "./component/arrow/arrow";
import Calendar from "./component/Home/Kalendar";

function App() {
  return (
    <HashRouter>
      <Cartandwish />
      <Arrow />
      <Cart />
      <Calendar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="singleproduct/:id" element={<Singleproduct />} />
          <Route path="accessories" element={<Accsessuar />} />
          <Route path="restaurant" element={<Restorans />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="filterproductpage" element={<Filterproductpage />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
