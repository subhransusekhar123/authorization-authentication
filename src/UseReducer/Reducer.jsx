import React,{useReducer} from 'react'


const initialState = 0


const usereducer = (state,action) => {
    console.log(state,action)
    if(action.type === 'increament'){
        state+=1
    }else{
        state-=1
    }
   return state
}





const Reducer = () => {
    // const [state,setState] = useState(0)
    const [state, dispatch] = useReducer(usereducer,initialState)// reducer,function,initialstate
  return (
    <div>
        <button onClick={()=>dispatch({type:'increament'})}>add</button>
        <span>{state}</span>
        <button onClick={()=>dispatch({type:'decrement'})}>minus</button>
    </div>
  )
}

export default Reducer