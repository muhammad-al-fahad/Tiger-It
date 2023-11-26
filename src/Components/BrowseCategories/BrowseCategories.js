import "./browseCategories.css";

function BrowseCategories() {
  return (
    <>
      <section className="browse-section">
        <div className="browse-section-area">
          <div className="browse-content">
            <h3 className="content-title">Browse Categories</h3>
            <p className="content-p">View all</p>
          </div>
          <div className="row">
            <div className="browse-item-card col-6 col-sm-4 col-md-2 mb-3">
              <div className="card-image">
                <img src="/assets/images/smartphone.png" alt="" width="60px" height="60px"/>
              </div>
              <p className="text-center">Smartphone & Tablets</p>
            </div>

            <div className="browse-item-card col-6 col-sm-4 col-md-2 mb-3">
              <div className="card-image">
                <img src="/assets/images/health.png" alt="" width="60px" height="60px"/>
              </div>
              <p className="text-center">Health & Wellness</p>
            </div>

            <div className="browse-item-card col-6 col-sm-4 col-md-2 mb-3">
              <div className="card-image">
                <img src="/assets/images/charger.png" alt="" width="60px" height="60px"/>
              </div>
              <p className="text-center">Mobile Accessories</p>
            </div>

            <div className="browse-item-card col-6 col-sm-4 col-md-2 mb-3">
              <div className="card-image">
                <img src="/assets/images/mouse.png" alt="" width="60px" height="60px"/>
              </div>
              <p className="text-center">Computers Accessories</p>
            </div>

            <div className="browse-item-card col-6 col-sm-4 col-md-2 mb-3">
              <div className="card-image">
                <img src="/assets/images/bread.png" alt="" width="60px" height="60px"/>
              </div>
              <p className="text-center">Breakfast Essentials</p>
            </div>

            <div className="browse-item-card col-6 col-sm-4 col-md-2 mb-3">
              <div className="card-image">
                <img src="/assets/images/food.png" alt="" width="60px" height="60px"/>
              </div>
              <p className="text-center">Fruits & Vegetables</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default BrowseCategories;
