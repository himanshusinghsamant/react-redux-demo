import React from 'react'
import { connect } from 'react-redux'
import {buyCake } from '../redux'
import { addMoreCake } from '../redux'
import { useDispatch } from 'react-redux'


const BuyCakesContainer = (props) => {

  const dispatch = useDispatch()
  return (
    <div>
      <h1>Some delicious cakes : {props.numOfCakes}</h1>
      <button onClick={()=> dispatch(buyCake())}>Buy Cakes </button>
     <button onClick={()=> dispatch(addMoreCake())}>Add More Cakes</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
     return {
      numOfCakes : state.Cake.numOfCakes
     }
}

// const mapDispatchToProps = (dispatch)=>{
//   return{
//     buyCake : ()=> dispatch(buyCake()),
   
//   }
// }


// const mapDispatchToAddCakes = (dispatch)=>{
//   return{
//     addMoreCakes : ()=> dispatch(addMoreCakes()),
   
//   }
// }


export default connect(mapStateToProps)(BuyCakesContainer)
