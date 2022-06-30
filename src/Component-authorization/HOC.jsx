import React,{useEffect} from 'react';
import Form from './Form';

const HOC = ({children}) => {
    let getData = JSON.parse(localStorage.getItem("data"));
    console.log(getData)
    console.log(getData.email)


  return (
    <>
    {
        getData.token ? children : <Form/>
    }
    </>
  )
}

export default HOC;