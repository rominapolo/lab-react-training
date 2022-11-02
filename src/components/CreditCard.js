import React from 'react'

export default function CreditCard(props) {
    console.log (props)
  return (
    <div style={{backgroundColor: `${props.bgColor}`, color:`${props.color}`}} >
    <h3>type: {props.type}</h3>
    <h3>Number: {props.expirationMonth}</h3>
    <h3>Gender: {props.expirationYear}</h3>
    <h3>Bank: {props.bank}</h3>
    <h3>Owner: {props.owner}</h3>
    </div>
  )
}
