import { Link } from "react-router-dom";
import "./productcard.css";

function ProductCard() {
  return (
    <>
    
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card pb-3 border-0 ">
        <Link to='/product-details' className="text-decoration-none" >
          <div className="card-container">
            <div className="product-image-container">
              <img
                className="product-image"
                src="https://s3-alpha-sig.figma.com/img/f5ff/8e34/f9c79e02a01aca7a6ffaebd8abb858e4?Expires=1701648000&Signature=ObFcNsMV1KmhWx~kTCOhjn7Yfy9jZGiBEj95z-8PT0jdnteyq1xmovV~Z0mfqFY0I26yFn2sIx--kRdwESh~3JsjjEFf6FpyLuKSrHDhLmz9bclewGyQ2dAago42c1xafvhWYLtzsKBtnx2pm5ateTxcmLiV6GI2KkZOeXRfPW3J5KyrLIjVot5lOKAv9Z5QYdusZKiDmOl~07jYIxkaaoOnbJpTM~~ghDBO4xK7WK9YSg0EAkaYkN~05YGH2qjdF-LeoO3yfWNv~2yTn05UuEwDDYrOSo47x3upNgoFI1uo9hFKxfPJvLYchmPlpwTzVDk4ZHMuUZxeznuqSBk61w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Product"
              />
              <div className="offer-badge">
                <div className="discount-badge">
                  <div className="discount-rectangle">
                    <img src="/assets/images/Heart.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-details">
              <div className="product-title">
                iPhone 14 Pro Max 256GB Deep Purple
              </div>
              <div className="product-price">$1300</div>
              <div className="offer-details">
                <div className="discount-price">$1450</div>
                <div className="discount-off">28% OFF</div>
              </div>
              <div className="rating-container">
                <img src="/assets/images/Star-yellow.svg" alt="" />
                <img src="/assets/images/Star-yellow.svg" alt="" />
                <img src="/assets/images/Star-yellow.svg" alt="" />
                <img src="/assets/images/Star-yellow.svg" alt="" />
                <img src="/assets/images/Star-white.svg" alt="" />
                4.0
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    
    </>
  );
}

export default ProductCard;
