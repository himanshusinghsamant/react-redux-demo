import React from 'react'
import { connect } from 'react-redux'
import { buyIcecreams, addMoreIcecreams } from '../redux'
import { useDispatch } from 'react-redux'

const BuyIceCreamContainer = (props) => {

  const dispatch = useDispatch()

  return (
    <div>
       <div>
        <h1>Some Tasty and colourful IceCreams : {props.numOfIceCreams}</h1>
        <button onClick={()=> dispatch(buyIcecreams())}>Buy IceCream</button>
        <button onClick={()=> dispatch(addMoreIcecreams())}>Add More IceCreams</button>
      </div>
    </div>
  )
}

const mapStateToProps =(state)=>{
  return{
    numOfIceCreams : state.IceCream.numOfIceCreams
  }
}

export default connect(mapStateToProps)(BuyIceCreamContainer)
