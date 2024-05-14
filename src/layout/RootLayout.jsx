import { Outlet } from "react-router-dom";
import Header from "../component/Header";
function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default RootLayout;
