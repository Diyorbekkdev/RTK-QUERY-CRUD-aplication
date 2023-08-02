import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from './components/layout/RootLayout'
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
          <Route index element={<Home/>} />
          {/* <Route path="shopping-cart" element={<CartPage/>}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
