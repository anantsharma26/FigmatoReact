import { searchpc } from "../assets";
import { GetdbService } from "../services/dbServices";
import { useState, useEffect } from "react";
import axios from "axios";

export function loader(args) {
  const endPoint = "http://localhost:3000/getServices";
  const response = axios.get(endPoint);
  console.log(response);
  return null;
}

function Services() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const endPoint = "http://localhost:3000/getServices";
  //   async function servicedata() {
  //     try {
  //       const response = await fetch(endPoint);
  //       if (!response.ok) {
  //         throw new Error("no data found");
  //       }
  //       const responsedata = await response.json();
  //       setData(responsedata.data);
  //     } catch (error) {
  //       console.log("there has been a problem", error.message);
  //     }
  //     setLoading(false);
  //   }
  //   servicedata();
  // }, []);

  // if (loading) {
  //   return <h1>Loading!!</h1>;
  // }

  return (
    <section className="serv-sec">
      <div className="container">
        <div className="headbox">
          <h5>Care Features</h5>
          <h3>
            Provide Awesome Service
            <br /> With Our Tools
          </h3>
        </div>
        <div className="servicerow">
          {data.map((newdata, index) => {
            return (
              <div className="servicebox" key={"servicebox" + index}>
                <div className="imgbox">
                  <img src={searchpc} alt="" />
                </div>
                <div className="servicedesc">
                  <h4>{newdata.title}</h4>
                  <p>{newdata.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Services;
