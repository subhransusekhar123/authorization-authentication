import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';

let autho = [
    {
        type:'teacher',
        path:['/Greet','/Table']
    },
    {
        type:'student',
        path:['/Table']
    },

]
const HOC = ({children}) => {
    let location = useLocation()
    let getData = JSON.parse(localStorage.getItem("data"));
    console.log(getData)
    // console.log(getData.email)

    let knowType = autho.find((ele)=>ele.type === 'student');
    console.log(knowType)
    let isThere = knowType.path.includes(location.pathname)
    console.log(isThere)
    console.log(location)


  return (
    <>
    {
        getData?.token && isThere ? children : <Form/>
    }
    </>
  )
}

export default HOC;