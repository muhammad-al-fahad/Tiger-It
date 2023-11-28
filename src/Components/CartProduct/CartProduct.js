import './cartProduct.css'

function CartProduct() {
  return (
    <>
        <section className='cart-product'>
            <img src="/assets/images/iphone.png" alt="" />
            <div className="cart-product-detail">
                <p className='cart-product-title'>iPhone 14 Pro Max 256GB Deep Purple</p>
                <div className="cart-product-price">
                    <p className='price-title'>$1300</p>
                    <div className="cart-product-discount">
                        <p className='discount-title text-decoration-line-through'>$1450</p>
                        <p className='discount-percentage'>28% OFF</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CartProduct
