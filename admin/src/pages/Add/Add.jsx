import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <div>
      <div className="add">
        <form action="" className="flex-col">
          <div className="add-img-upload flex">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={assets.upload_area} />
            </label>
            <input type="file" id="image" hidden required />
          </div>
          <div className="add-product-name flex-col"> 
            <p>Product name</p>
            <input type="text" name="name" placeholder="Type here" />
          </div>
          <div className="add-product-description flex-col"> 
            <p>Product name</p>
            <textarea type="text" name="description" rows="6" placeholder="write content here" />
          </div>
          <div className="add-category-price flex-col"> 
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select name="category" id="">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desert">Desert</option>
                <option value="Sandwitch">Sandwitch</option>
                <option value="Cake">Cake</option>
                <option value="Pure veg">Pure veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product price</p>
              <input type="Number" name="price" placeholder="$20"/>
            </div>
          </div>
          <button type="submit" className="add-btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
