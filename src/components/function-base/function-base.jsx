import React, { useState, useEffect } from 'react';

function FunctionBased(props) {

  console.log(props.name);

  useEffect(() => { 
    setTimeout(() => {
       setcount((count)=>(count+1.5))
    }, 1000);
  })

  const [count, setcount] = useState(0)
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
      <h5 className="">Function Based {count}  </h5>
      
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