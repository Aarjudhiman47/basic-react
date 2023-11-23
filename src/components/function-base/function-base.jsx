import React, { useState } from 'react';

function FunctionBased(props) {

  console.log(props.name);


  const [list, setList] = useState([{
    name: "aarju",
    email: "aarju@gmail.com",
    id: 1,
  },
  {
    name: "dhiman",
    email: "dhiman@gmail.com",
    id: 2,
  },
  {
    name: "jyoti",
    email: "jyoti@gmail.com",
    id: 3,
  }
  ])

  function ChangeData() {
    console.log(list);
      setList([{
      name: "jyoti",
      email: "jyoti@gmail.com",
      id: 3,
    },
    ])
}
 
  

  return (
    <div>
      <h5 className="">Function Based</h5>

      {list.map((value, index) => (
        <div key={index}>
          <p>Name: {value.name}</p>
          <p>Email: {value.email}</p>
          <p>id:{value.id}</p>
        </div>)
      )
      }
      <button onClick={ChangeData}>Update</button>

    </div>
  )
}

export default FunctionBased;