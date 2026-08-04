import {
  FiCoffee,
  FiTruck,
  FiAward,
  FiStar,
} from "react-icons/fi";

import "./Features.css";

const features = [
  {
    icon: <FiCoffee />,
    title: "Freshly Roasted",
    text: "Roasted in small batches for rich flavor."
  },
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    text: "Delivered quickly and safely to your door."
  },
  {
    icon: <FiAward />,
    title: "100% Organic",
    text: "Carefully selected beans from trusted farms."
  },
  {
    icon: <FiStar />,
    title: "Premium Quality",
    text: "Crafted for coffee lovers who expect the best."
  }
];

function Features() {
  return (
    <section className="features container">
      {features.map((item) => (
        <div className="feature-card" key={item.title}>
          <div className="feature-icon">
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;