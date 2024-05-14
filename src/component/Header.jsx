import LogoMain from "./LogoMain";
import { useState } from "react";
import Nav from "./Nav";
function Header() {
  const [isScroll, setIsScroll] = useState(false);

  document.addEventListener("scroll", () => {
    let scrollval = window.scrollY;
    if (scrollval >= 130) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  return (
    <>
      <header className={isScroll ? "bg" : ""}>
        <div className="container">
          <div className="mainhead">
            <LogoMain />
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
