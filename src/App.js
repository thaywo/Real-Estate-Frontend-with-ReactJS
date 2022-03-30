import React from "react";
import Feature from "./components/featured/Feature";
import Best from "./components/best/Best";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return(
<>
<Navbar/>
<Hero/>
<Best/>
<Feature/>
<Footer/>
</>
  );
}

export default App;