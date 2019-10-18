import React, { Fragment } from 'react'

const Sushi = (props) => {
  // () => depends on the type of component that's being clicked
  // This binds the action IF YOU ARE IN A FUNCTIONAL COMPONENT
  // Not necessary, but possible, in a class component

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eat(props.sushi)}>
             
        { 
          props.eatenSushis.includes(props.sushi) ?
            null
          :
            <img src={props.img_url} alt={props.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi