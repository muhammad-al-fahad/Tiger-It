import "./cart.css";
import CartProduct from "./CartProduct";

function Cart() {
  return (
    <>
      <section className="cart col-12">
        <div className="col-8">
          <div className="cart-steppers my-3">
            <div className="steppers-area">
              <div className="cart-contact">
                <img src="/assets/images/Icon.svg" alt="Icon" />
                <p className="contact-title">Contact Details</p>
              </div>
              <div className="cart-dash">
                <div className="dash-line"></div>
              </div>
              <div className="cart-delivery">
                <div className="delivery-position">02</div>
                <p className="delivery-title">Delivery Information</p>
              </div>
              <div className="cart-dash">
                <div className="dash-line"></div>
              </div>
              <div className="cart-payment">
                <div className="payment-position">03</div>
                <p className="payment-title">Payment Method</p>
              </div>
            </div>
          </div>

          <div className="cart-form-area w-100">
            <form className="cart-form ms-5">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="enter full name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="enter email address"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <div className="cart-country-number d-flex">
                  <select id="inputState" class="form-select">
                    <option selected>
                      <i className="fas fa-heart"></i>
                      <p>+1</p>
                    </option>
                    <option>
                      <i className="fas fa-heart"></i>
                      <p>+1</p>
                    </option>
                  </select>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="000 000 0000"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="cart-buttons">
            <button type="button" className="cancel">
              Cancel
            </button>
            <button type="button" className="continue">
              Continue
            </button>
          </div>
        </div>
        <div className="col-4">
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
