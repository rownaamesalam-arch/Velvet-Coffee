import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/shop" 
          element={<Shop />} 
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;