import React, { useState } from "react";

const Result = ({ records, deleteRecord , handleEdit}) => {
  


  return (
    <div className="ResultDiv">
      <h2>Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>SKU number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{value.category}</td>
              <td>{value.stock}</td>
              <td>{value.SKU}</td>
              <td>{value.status}</td>
              <td>
                <i class="fa-regular fa-pen-to-square mx-3" onClick={() => handleEdit(index)}></i> 
                <i
                  class="fa-solid fa-trash mx-3"
                  onClick={() => deleteRecord(index)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
