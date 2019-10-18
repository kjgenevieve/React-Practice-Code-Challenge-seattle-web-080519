import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.displaySushis.map((sushi) => {
            return <Sushi
              key={sushi.id}
              sushi={sushi}  
              img_url={sushi.img_url}
              name={sushi.name}
              price={sushi.price}
              eatenSushis={props.eatenSushis}
              eat={props.eat}
            />
          })
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer