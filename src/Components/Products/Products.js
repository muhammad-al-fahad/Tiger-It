import './product.css'

function Products() {
  return (
    <>
    <section className="product-section">
        <div className="product-section-area">
            <div className="product-content">
                <h3 className="content-title">Recommended for you</h3>
                <p className="content-p">View all</p>
            </div>
            <div className="row">
                <div className="product-item-card col-6 col-sm-4 col-md-3">
                    <div className="product-card-area">
                        <div className="product-card-image">
                            <img src="/assets/images/iphone.png" alt="iPhone 14 Pro Max"/>
                            <div className="card-fav">
                                <img src="/assets/images/Heart.svg" alt="Favorite Hearth" />
                            </div>
                        </div>
                        <div className="product-card-content">
                            <div className="card-content-area">
                                <p className="card-p">iPhone 14 Pro Max 256GB Deep Purple </p>

                                <div className="card-price">
                                    <p className="card-discount-price">$1300</p>
                                    <div className="card-original-price">
                                        <p className="card-original text-decoration-line-through">$1450</p>
                                        <p className="card-discount">28% OFF</p>
                                    </div>
                                </div>

                                <div className="card-rating">
                                    <div className="card-rating-stars">
                                        <img src="/assets/images/Star-yellow.svg" alt="Rating Star" />
                                        <img src="/assets/images/Star-yellow.svg" alt="Rating Star" />
                                        <img src="/assets/images/Star-yellow.svg" alt="Rating Star" />
                                        <img src="/assets/images/Star-yellow.svg" alt="Rating Star"/>
                                        <img src="/assets/images/Star-white.svg" alt="Rating Star" />
                                    </div>
                                    <p className="card-rating-number">4.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Products
