 import React from "react";

function AddForm() {
        function submitHandler(e){
            e.preventDefault();
        }

    return (
        <div>

            <form onSubmit={submitHandler} >

                <h3>bussiness</h3>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="name" required />
                <label htmlFor="Price">Price</label>
                <input type="number" name="Price" placeholder="Price" required />
                <label htmlFor="Category">Category</label>
                <input type="text" name="Category" placeholder="Category" required />
                <label htmlFor="Stock">Stock</label>
                <input type="text" name="Stock" placeholder="stock" required />
                <label htmlFor="SKU">SKU number</label>
                <input type="text" name="SKU" placeholder="SKU number"  required disabled/>
                <label htmlFor="Status">Status</label>

                 <select name="Status" id="Status" required>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>
                  <button type="submit">Submit</button>
                  <button type="reset">Cancel</button>
            </form>
        </div>

    )
}


export default AddForm;