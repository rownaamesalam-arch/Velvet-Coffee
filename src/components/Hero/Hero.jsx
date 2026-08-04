import "./Hero.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-subtitle">
          Premium Coffee Experience
        </span>

        <h1>
          Crafted for Every
          <br />
          Coffee Moment
        </h1>

        <p>
          Discover freshly roasted coffee beans,
          handcrafted drinks, and elegant accessories
          designed to elevate your daily ritual.
        </p>

        <div className="hero-buttons">
          <Button to="/shop">
  Shop Now
</Button>



        </div>

      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900"
          alt="Coffee"
        />
      </div>

    </section>
  );
}

export default Hero;