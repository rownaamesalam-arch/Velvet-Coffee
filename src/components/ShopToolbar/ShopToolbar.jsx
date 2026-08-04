import {
  FiSearch
} from "react-icons/fi";

import "./ShopToolbar.css";


function ShopToolbar({

search,
setSearch,
category,
setCategory,
sort,
setSort

}) {


  return (

    <div className="shop-toolbar">


      <div className="search-box">

        <FiSearch />

        <input

         type="text"

         placeholder="Search coffee..."

         value={search}

         onChange={(e)=>setSearch(e.target.value)}

        />

      </div>



      <select

      value={category}

      onChange={(e)=>setCategory(e.target.value)}

      >

        <option>
          All Categories
        </option>

        <option>
          Coffee Beans
        </option>

        <option>
          Ground Coffee
        </option>

        <option>
          Espresso
        </option>


      </select>



      <select

value={sort}

onChange={(e)=>setSort(e.target.value)}

>

        <option value="">
Sort By
</option>

<option value="low">
Price Low To High
</option>

<option value="high">
Price High To Low
</option>


      </select>


    </div>

  );

}


export default ShopToolbar;