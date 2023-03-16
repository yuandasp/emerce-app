import React from "react";
import ProductCard from "../components/productCard";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <strong>Filter Products</strong>
            </div>
            <div className="card-body">
              <label htmlFor="searchProductName">Product Name</label>
              <input
                type="text"
                name="searchProductName"
                className="form-control mb-3"
              />
              <label htmlFor="searchCategory">Product Category</label>
              <select name="searchCategory" id="" className="form-control">
                <option value="">All Items</option>
                <option value="">Kaos</option>
                <option value="">Celana</option>
                <option value="">Aksesoris</option>
              </select>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <strong>Sort Products</strong>
            </div>
            <div className="card-body">
              <label htmlFor="searchCategory">Sort by</label>
              <select name="searchCategory" id="" className="form-control">
                <option value="">Default</option>
                <option value="">Lowest Price</option>
                <option value="">Highest Price</option>
                <option value="">A-Z</option>
                <option value="">Z-A</option>
              </select>
            </div>
          </div>
          <div className="mt-3">
            <div className="d-flex flex-row justidy-content-between align-items-center">
              <button className="btn btn-dark">{"<"}</button>
              <div className="text-center mx-2"> Page 1 of 8</div>
              <button className="btn btn-dark">{">"}</button>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="d-flex flex-wrap flex-row">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
