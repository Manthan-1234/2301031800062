
// import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Genre from "./Components/Genre";
import Movie from "./Components/Movie";
import Footer from "./Components/Footer";
import Home1 from "./Components/Home1";

function App() {
  return (
    <div className="bg-black min-h-screen">
       {/* <Router> */}
      
   
        
          {/* <Link to="/" className="text-blue-600 hover:underline">Home1</Link> */}
          {/* <Link to="/about" className="text-green-600 hover:underline">About</Link> */}
        

       
        {/* <Routes>
          <Route path="/" element={<Home1 />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      
    {/* </Router> */}
     
      <Navbar />
      <Banner />
      <Category />
      <Genre />
      <Movie />
      <Footer />
    
    </div>
  );
}

export default App;
