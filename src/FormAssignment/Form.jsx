import React,{useState} from 'react'
import './Form.css'

const Form = () => {
  const [state,setState] = useState({})
  const [flag,setFlag] = useState(false)
  let changeHandler = (e) => {
    setState({
      ...state,[e.target.name]:e.target.value
    })
    console.log(state)

  }


  let submit = (e) => {
    if(state.name.length< 3 ){
      e.preventDefault();
      setFlag(true)

    }else if(state.name.length > 15){
      e.preventDefault();
      setFlag(true)

    }else{
      localStorage.setItem('anant',JSON.stringify([state.name,state.rating,state.Quote]))
    }
  
  }

  


  return (
    <>
    <div className="container">

    <form onSubmit={submit}>
        <label>rating</label>
        <select name="rating" id="" onChange = {changeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
      
        <div>

        <label >name</label>
        <input type="text" name='name'  onChange = {changeHandler}/>
        </div>
        {
          flag && <p style={{color:'red'}}>hey name is less than 3</p>
        }


        <label htmlFor="textarea"></label>
        <textarea name="Quote" id="textarea" cols="30" rows="10" onChange = {changeHandler}></textarea>

        <button>submit</button>
    </form>
    </div>
    </>
  )
}

export default Form;