import { useState } from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <About />
      <Products />
      <Footer />

    </div>
  );
}

export default App;
