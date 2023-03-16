import React from "react";
import "../assets/styles/product-Card.css";

function productCard() {
  return (
    <div className="card product-card">
      <img
        src="https://dynamic.zacdn.com/vWpT3Ds376Z856ka5E16CQlnAcs=/fit-in/346x500/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/kepomp-1136-1436992-1.jpg"
        alt=""
      />
      <div className="mt-2">
        <div>
          <h6>Product Name Here</h6>
          <span className="text-muted">Rp 25.000,-</span>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <button className="btn btn-primary mt-2">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default productCard;
