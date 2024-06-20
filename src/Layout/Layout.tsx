import ExitBtn from "../components/Buttons/ExitBtn/ExitBtn";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

export default function Layout() {
  return (
    <div className="layoutWrapper">
      <Header></Header>
      <main className="main">
        <ExitBtn></ExitBtn>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
