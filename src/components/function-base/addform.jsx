import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddForm = (props) => {
  const { addRecord, formdata, setformData } = props;

  const [error, setErrors] = useState({});
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setformData({ ...formdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const validationError = {};
    if (!formdata.name.trim()) {
      validationError.name = "Name is required";
    } else if (!/^[A-Za-z\s]{4,10}$/.test(formdata.name)) {
      validationError.name = "Name must be between 4 and 10 characters";
    }

    if (!formdata.price.trim()) {
      validationError.price = "Price is required";
    } else if (!/^\d{3}$/.test(formdata.price)) {
      validationError.price = "Price must be 3 digits";
    }

    if (!formdata.category.trim()) {
      validationError.category = "Category is required";
    } else if (!/^[A-Za-z\s]{4,10}$/.test(formdata.category)) {
      validationError.category = "category must be between 4 and 10 characters";
    }

    if (!formdata.stock.trim()) {
      validationError.stock = "Stock is required";
    } else if (!/^\d{2}$/.test(formdata.stock)) {
      validationError.stock = "Stock must be 2 digits";
    }

    if (!formdata.status) {
      validationError.status = "Status is required";
    }

    setErrors(validationError);

    console.log(Object.keys(validationError).length, "length");

    if (Object.keys(validationError).length === 0) {
        
        setRecords([...records, formdata]);
        addRecord(formdata);
    

      setformData({
        name: "",
        price: "",
        category: "",
        stock: "",
        status: "",
        SKU:uuidv4(),
      });
    }
  };

  const clearForm = () => {
    setformData({
      name: "",
      price: "",
      category: "",
      stock: "",
      SKU: "",
    });
  };

  return (
    <div className="form">
      <h1>Form</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          className="form-control"
          autoComplete="off"
          value={formdata.name || '' }
          onChange={handleInput}
        />
        {error.name && <p>{error.name}</p>}
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Enter the price(numeric digit)"
          className="form-control"
          autoComplete="off"
          value={formdata.price}
          onChange={handleInput}
        />
        {error.price && <p>{error.price}</p>}
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder=" Enter the category"
          className="form-control"
          autoComplete="off"
          value={formdata.category}
          onChange={handleInput}
        />
        {error.category && <p>{error.category}</p>}
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          placeholder=" Enter the stock"
          className="form-control"
          autoComplete="off"
          value={formdata.stock}
          onChange={handleInput}
        />
        {error.stock && <p>{error.stock}</p>}
        <label htmlFor="SKU">SKU</label>
        <input
          type="text"
          name="sku"
          id="sku"
          placeholder=" Enter the sku"
          value={formdata.SKU}
          className="form-control"
          disabled
        />
        <label htmlFor="status">Status</label>
        <select
          className="form-control"
          name="status"
          id="status"
          value={formdata.status}
          onChange={handleInput}
          
        >
         
          {" "}
          <option value="">Select</option>
          <option id="Available" value="Available">
            Available
          </option>
          <option id="NotAvailable" value="NotAvailable">
            Not Available
          </option>
        </select>
        {error.status&& <p>{error.status}</p>}
        <br></br>
        <br></br>

        <button className="mx-5" type="submit">
          submit
        </button>
        <button type="reset" onClick={clearForm} className="mx-5">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddForm;
