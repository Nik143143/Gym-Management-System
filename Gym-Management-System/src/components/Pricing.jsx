import { Check } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/public/img7.jpg",
      title: "The Foundation",
      price: 12000,
      length: 3,
    },
    {
      imgUrl: "/public/img7.jpg",
      title: "The Blueprint",
      price: 23000,
      length: 6,
    },
    {
      imgUrl: "/public/img7.jpg",
      title: "The Signature",
      price: 44000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1 className="name">Imperial Fit</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipments
                </p>
                <p>
                  <Check />
                  For building a lasting, healthy life.
                </p>
                <p>
                  <Check />
                  For a meticulously planned path to fitness success.
                </p>
                <p>
                  <Check /> Free Training
                </p>
                <p>
                  <Check /> All Time Restroom Available
                </p>
                <p>
                  <Check /> 365 Days Support
                </p>
                <p>
                  <Check /> 10 Days streak Free
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
