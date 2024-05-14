import MainButton from "../component/MainButton";
import { bannerimg } from "../assets";

function Banner() {
  return (
    <section className="bannermain">
      <div className="container">
        <div className="bannerrow">
          <div className="imgbox">
            <img src={bannerimg} alt="" />
          </div>
          <div className="bannertext">
            <h1>Digit Growth Experts</h1>
            <p>
              Ensuring the best return on investment for your bespoke SEO
              campaign requirement.
            </p>
            <MainButton type="transparent">Start Your Journey</MainButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
