import React, { useState } from 'react'
import './App.css'
import '../public/css/style.css'
import AddForm from './components/function-base/addform'
import List from './components/function-base/list'
import FunctionBased from './components/function-base/function-base'
import ClassBase from './components/class-base'


function App() {
  

  return (
    <>
    <AddForm />
    <List />
    {/* <ClassBase /> */}
    {/* <FunctionBased name={"aarju dhiman"}/> */}
    </>
  )
}

export default App
