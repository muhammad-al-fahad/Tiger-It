import CartProduct from "../CartProduct/CartProduct";
import './cartDelivery.css'
import {Link} from 'react-router-dom'

function Cart() {
  return (
    <>
      <section className="container-fluid cart-delivery">
        <div className="row col">
          <div className="col-12 col-sm-12 col-md-6 col-lg-8">
            <div className="cart-steppers my-5">
              <div className="steppers-area">
                <div className="cart-step">
                  <img src="/assets/images/check.svg" alt="check" />
                  <p className="contact-title">Contact Details</p>
                </div>
                <div className="cart-dash-1">
                  <div className="dash-line"></div>
                </div>
                <div className="cart-step">
                  <img src="/assets/images/Icon.svg" alt="Icon" />
                  <p className="delivery-title">Delivery Information</p>
                </div>
                <div className="cart-dash-2">
                  <div className="dash-line"></div>
                </div>
                <div className="cart-step">
                  <div className="payment-position">03</div>
                  <p className="payment-title">Payment Method</p>
                </div>
              </div>
            </div>

            <div className="cart-form-area w-100">
              <form className="cart-form ms-5">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Province
                  </label>
                  <select id="inputState" class="form-select">
                  <option selected>
                    Punjab
                  </option>
                  <option>
                    Balochistan
                  </option>
                </select>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    City
                  </label>
                  <select id="inputState" class="form-select">
                  <option selected>
                    Multan
                  </option>
                  <option>
                    Kot Addu
                  </option>
                </select>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Address
                  </label>
                  <div className="cart-country-number d-flex">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>
                <div className="cart-form-notes">
                  <div className="notes-area">
                    <div className="notes-content">
                      <img src="/assets/images/Notes.svg" alt="" />
                      <p>Add Pickup Notes</p>
                    </div>
                    <img src="/assets/images/chevron-right.svg" alt="" />
                  </div>
                </div>
              </form>
            </div>

            <div className="cart-buttons">
              <button type="button" className="cancel">
                Cancel
              </button>
              <Link to="/cart-payment" className="text-decoration-none">
              <button type="button" className="continue">
                Continue
              </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="cart-total-section">
              <div className="my-cart">
                <div className="my-cart-head">
                  <div className="items">
                    <p>My Cart</p>
                    <p>(3 Items)</p>
                  </div>
                  <h2 className="price">$13,000</h2>
                </div>
                <div className="my-cart-products">
                  <CartProduct />
                  <CartProduct />
                  <CartProduct />
                </div>
                <div className="my-cart-dash"></div>
              </div>
              <div className="order-summary">
                <div className="order-summary-head">
                  <p className="head-title">Order Summary</p>
                </div>
                <div className="order-summary-total">
                  <div className="total-coupon">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Coupon Code"
                    />
                    <button type="button" className="apply">
                      Apply
                    </button>
                  </div>

                  <div className="cart-total-price">
                    <div className="price-data">
                      <p>
                        <span>Subtotal</span> 
                        <span>(1 item)</span>
                      </p>
                      <p>1,199.00</p>
                    </div>
                    <div className="price-data">
                      <p>Shipping Fee</p>
                      <p>Free</p>
                    </div>
                    <div className="price-data">
                      <p>
                        <span>Total</span> 
                        <span>(Inclusive of VAT)</span>
                      </p>
                      <p>1.199.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;