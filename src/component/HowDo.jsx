import { howdo } from "../assets";
import MainButton from "./MainButton";
import { FaCheckCircle } from "react-icons/fa";

function HowDo() {
  return (
    <section className="howdo">
      <div className="container">
        <div className="equalrow">
          <div className="desbox">
            <h5>How We Do</h5>
            <h3>
              Boosts Your Website <br />
              Traffic!
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              ornare metus, nec commodo neque. Phasellus nulla est, tincidunt
              sed risus nec, pulvinar pharetra turpis. Vestibulum interdum
              tortor ac felis mollis, eget tempor risus mollis. Phasellus dui
              quam, imperdiet.
            </p>
            <ul className="dolist">
              <li>
                <FaCheckCircle color="var(--blue)" />
                Keyword Strategy
              </li>
              <li>
                <FaCheckCircle color="var(--blue)" />
                Analysis & Reports
              </li>
              <li>
                <FaCheckCircle color="var(--blue)" />
                Account Reached
              </li>
              <li>
                <FaCheckCircle color="var(--blue)" />
                Access to Dashboard
              </li>
              <li>
                <FaCheckCircle color="var(--blue)" />
                Accurate Reports
              </li>
              <li>
                <FaCheckCircle color="var(--blue)" />
                Client Support
              </li>
            </ul>
            <MainButton type="colored">Read More</MainButton>
          </div>
          <div className="imgbox">
            <img src={howdo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowDo;
