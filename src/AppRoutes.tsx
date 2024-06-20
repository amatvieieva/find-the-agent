import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import SellTime from "./pages/SellTime/SellTime";
import Address from "./pages/Address/Address";
import Price from "./pages/Price/Price";
import FocusAgent from "./pages/FocusAgent/FocusAgent";
import Result from "./pages/Result/Result";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/sellSpeed' element={<SellTime />} />
        <Route path='/address' element={<Address />} />
        <Route path='/price' element={<Price />} />
        <Route path='/focusAgent' element={<FocusAgent />} />
        <Route path='/result' element={<Result />} />Result
      </Route>
    </Routes>
  );
}
