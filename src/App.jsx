import React, { useState } from "react";
import "./App.css";
import "../public/css/style.css";
// import FunctionComponent from "./components/function-base/addform";
// import ResultDiv from "./components/function-base/list";
import FunctionBased from "./components/function-base/function-base";
import ClassBase from "./components/class-base";
import AddForm from "./components/function-base/addform";
import Result from "./components/function-base/list";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [records, setRecords] = useState([]);
  const [formdata, setformData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    SKU: uuidv4(),
    status: " ",
  });

  const addRecord = (newRecord) => {
    if (!!records.find((data) => data.SKU === newRecord.SKU)) {
      setRecords((prevRecords) => {
        return prevRecords.map((record) => {
          if (record.SKU === newRecord.SKU) {
            return {
              ...record,
              name: newRecord.name,
              price: newRecord.price,
              category: newRecord.category,
              stock: newRecord.stock,
              status: newRecord.status,
            };
          } else {
            return record;
          }
        });
      });
    } else {
      setRecords([...records, newRecord]);
    }
  };
  const deleteRecord = (index) => {
    const updatedRecords = [...records];
    updatedRecords.splice(index, 1);
    setRecords(updatedRecords);
  };

  const handleEdit = (index) => {
    console.log(records[index], "data");
    setformData({
      name: records[index].name,
      price: records[index].price,
      category: records[index].category,
      stock: records[index].stock,
      SKU: records[index].SKU,
      status: records[index].status,
    });
  };

  return (
    <>
      <AddForm
        addRecord={addRecord}
        formdata={formdata}
        setformData={setformData}
      />
      {records.length && (
        <Result
          records={records}
          deleteRecord={deleteRecord}
          handleEdit={handleEdit}
        />
      )}
      {/* <ClassBase /> */}
      {/* <FunctionBased name={"aarju dhiman"}/> */}
    </>
  );
}

export default App;
