import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section className="featured-products">

      <SectionTitle
        subtitle="Premium Coffee"
        title="Our Featured Collection"
        description="Discover our carefully selected coffee collection crafted for every coffee lover."
      />

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default FeaturedProducts;