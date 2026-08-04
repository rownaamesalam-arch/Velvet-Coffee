import categories from "../../data/categories";
import CategoryCard from "../CategoryCard/CategoryCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Categories.css";


function Categories() {

  return (

    <section 
  id="categories"
  className="categories"
>

      <SectionTitle
        subtitle="Browse"
        title="Explore Our Categories"
        description="Find your perfect coffee style and accessories."
      />


      <div className="categories-grid">

        {
          categories.map((category)=>(
            
            <CategoryCard
              key={category.id}
              category={category}
            />

          ))
        }

      </div>


    </section>

  );

}


export default Categories;