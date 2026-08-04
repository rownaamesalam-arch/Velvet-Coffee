import "./CategoryCard.css";

function CategoryCard({ category }) {

  return (

    <article className="category-card">

      <img
        src={category.image}
        alt={category.title}
      />


      <div className="category-overlay">

        <h3>
          {category.title}
        </h3>


        <p>
          {category.description}
        </p>


        <button>
          Explore
        </button>

      </div>


    </article>

  );

}

export default CategoryCard;