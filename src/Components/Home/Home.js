import Hero from "../Hero/Hero";
import BrowseCategories from "../BrowseCategories/BrowseCategories";
import ProductCard from "../ProductCard/ProductCard";
import "./products.css";

function Home() {
  return (
    <>
      <Hero />
      <BrowseCategories />

      <section className="product-section">
        <div className="product-section-area">
          <div className="product-content">
            <h3 className="content-title">Recommended for you</h3>
            <p className="content-p">View all</p>
          </div>

          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      
      <section className="product-section">
        <div className="product-section-area">
          <div className="product-content">
            <h3 className="content-title">Trending deals</h3>
            <p className="content-p">View all</p>
          </div>

          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-section-area">
          <div className="product-content">
            <h3 className="content-title">Bestselling products</h3>
            <p className="content-p">View all</p>
          </div>

          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
