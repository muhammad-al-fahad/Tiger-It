import React from "react";
import "./productcard.css";
function ProductCard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card p-3">
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
                        <i class="fa fa-heart" aria-hidden="true"></i>
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
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="star-badge" >
                        <div
                          className={`star ${
                            index < 4 ? "full-star" : "empty-star"
                          }`}
                        ></div>
                      </div>
                    ))}
                    <div className="rating"> <i class='fa fa-star'></i> 4.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3">
              <div className="card-container">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src="https://s3-alpha-sig.figma.com/img/f5ff/8e34/f9c79e02a01aca7a6ffaebd8abb858e4?Expires=1701648000&Signature=ObFcNsMV1KmhWx~kTCOhjn7Yfy9jZGiBEj95z-8PT0jdnteyq1xmovV~Z0mfqFY0I26yFn2sIx--kRdwESh~3JsjjEFf6FpyLuKSrHDhLmz9bclewGyQ2dAago42c1xafvhWYLtzsKBtnx2pm5ateTxcmLiV6GI2KkZOeXRfPW3J5KyrLIjVot5lOKAv9Z5QYdusZKiDmOl~07jYIxkaaoOnbJpTM~~ghDBO4xK7WK9YSg0EAkaYkN~05YGH2qjdF-LeoO3yfWNv~2yTn05UuEwDDYrOSo47x3upNgoFI1uo9hFKxfPJvLYchmPlpwTzVDk4ZHMuUZxeznuqSBk61w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Product"
                  />
                  <div className="offer-badge">
                    <div className="discount-badge">
                      <div className="discount-rectangle"></div>
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
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="star-badge">
                        <div
                          className={`star ${
                            index < 4 ? "full-star" : "empty-star"
                          }`}
                        ></div>
                      </div>
                    ))}
                    <div className="rating">4.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3">
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
                        <i class="fa fa-heart" aria-hidden="true"></i>
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
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="star-badge">
                        <div
                          className={`star ${
                            index < 4 ? "full-star" : "empty-star"
                          }`}
                        ></div>
                      </div>
                    ))}
                    <div className="rating">4.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3">
              <div className="card-container">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src="https://s3-alpha-sig.figma.com/img/f5ff/8e34/f9c79e02a01aca7a6ffaebd8abb858e4?Expires=1701648000&Signature=ObFcNsMV1KmhWx~kTCOhjn7Yfy9jZGiBEj95z-8PT0jdnteyq1xmovV~Z0mfqFY0I26yFn2sIx--kRdwESh~3JsjjEFf6FpyLuKSrHDhLmz9bclewGyQ2dAago42c1xafvhWYLtzsKBtnx2pm5ateTxcmLiV6GI2KkZOeXRfPW3J5KyrLIjVot5lOKAv9Z5QYdusZKiDmOl~07jYIxkaaoOnbJpTM~~ghDBO4xK7WK9YSg0EAkaYkN~05YGH2qjdF-LeoO3yfWNv~2yTn05UuEwDDYrOSo47x3upNgoFI1uo9hFKxfPJvLYchmPlpwTzVDk4ZHMuUZxeznuqSBk61w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Product"
                  />
                  <div className="offer-badge">
                    <div className="discount-badge">
                      <div className="discount-rectangle"></div>
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
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="star-badge">
                        <div
                          className={`star ${
                            index < 4 ? "full-star" : "empty-star"
                          }`}
                        ></div>
                      </div>
                    ))}
                    <div className="rating">4.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
