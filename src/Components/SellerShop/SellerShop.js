import "./sellerShop.css";
import ProductCard from "../ProductCard/ProductCard";

function SellerShop() {
  return (
    <>
      <section className="seller-shop">
        <div className="seller-shop-profile">
          <img src="/assets/images/Avatar.png" alt="" />
          <div className="seller-profile-content">
            <h2 className="seller-profile-name">Miracle Mobile</h2>
            <div className="seller-profile-address">
              <img src="/assets/images/Map Point.svg" alt="" />
              <p className="address-location">Illinois, United States</p>
            </div>
            <div className="seller-profile-SR">
              <div className="seller-profile-sales">
                <img src="/assets/images/Cart.svg" alt="" />
                <p className="number-in-sales">45.5K Sales</p>
              </div>
              <div className="seller-profile-rating">
                <img src="/assets/images/Star-yellow.svg" alt="" />
                <p className="out-of-5">4.5/5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="seller-shop-buttons">
          <button type="button" className="contact">
            Contact
          </button>
          <button type="button" className="follow">
            Follow
          </button>
        </div>
      </section>

      <section className="product-section">
        <div className="product-section-area">
          <div className="product-content">
            <h3 className="content-title">Recomended for you</h3>
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

export default SellerShop;
