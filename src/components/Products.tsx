import Heading from "./res/Heading";
import Product from "./res/product";
import cover1 from '../assets/cover.webp'
import cover2 from '../assets/cover2.webp'
import cover3 from '../assets/cover3.webp'
import cover4 from '../assets/cover4.webp'



const Products = () => {
  return (
    <section className="products">
      <div className="content">
        <Heading text={"Popular Flavors"} />
        <div className="list">
          <Product image={cover1} title="Crunchy Delight" price={25.66} color="#fef9f4" text_color="#F1866E"/>
          <Product image={cover2} title="Crunchy Delight" price={25.66} color="#f0fffa" text_color="#4BBB91"/>
          <Product image={cover3} title="Crunchy Delight" price={25.66}color="#fff8f5" text_color="#997E79"/>
          <Product image={cover4} title="Crunchy Delight" price={25.66}color="#fffcf5" text_color="#655321"/>

        </div>
      </div>
    </section>
  );
};

export default Products;
