import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getProducts } from "../../services/product.service";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products?.slice(0, 4) || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeaturedProducts();
  }, []);

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
            key={product._id || product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default FeaturedProducts;
