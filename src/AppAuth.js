import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Greet from './Component/Greet';
import HOC from './Component/HOC';
import Table from './Component/Table';
import Form from './Component/Form';

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Form/>}/>
       
          <Route path='/greet' element={
                                <HOC>
                                  <Greet/>
                                </HOC>}/>
       

        <Route path='/Table' element={
                                <HOC>
                                  <Table/>
                                </HOC>}/>
    
      </Routes>
    </div>
  )
}

export default App;