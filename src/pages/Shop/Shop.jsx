import { useState,useEffect  } from "react";
import { getProducts } from "../../services/product.service";

import ProductCard from "../../components/ProductCard/ProductCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ShopToolbar from "../../components/ShopToolbar/ShopToolbar";

import "./Shop.css";


function Shop() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("");

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const data = await getProducts();
        console.log(data);

       setProducts(data.products);
      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);



  let filteredProducts = products.filter((product)=>{

    const matchSearch =
        product.name
        .toLowerCase()
        .includes(
            search.toLowerCase()
        );


    const matchCategory =
        category === "All" ||
        product.category === category;


    return matchSearch && matchCategory;

});



  if(sort === "low"){

    filteredProducts.sort(
      (a,b)=> a.price - b.price
    );

  }



  if(sort === "high"){

    filteredProducts.sort(
      (a,b)=> b.price - a.price
    );

  }



  return (

    <section className="shop">


      <SectionTitle

        subtitle="Our Store"

        title="Coffee Collection"

        description="Explore our premium coffee products."

      />



      <ShopToolbar

        search={search}

        setSearch={setSearch}

        category={category}

        setCategory={setCategory}

        sort={sort}

        setSort={setSort}

      />



      <div className="shop-grid">


        {
          filteredProducts.map((product)=>(

            <ProductCard

              key={product._id}

              product={product}

            />

          ))
        }


      </div>



    </section>

  );

}


export default Shop;