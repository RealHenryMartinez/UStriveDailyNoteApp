
import React from 'react'


//NOTE: Passing props should be wrapped in brackets {}
const Item = ({text, remove, update}) => {
  return (
    <div className="item">
        <div className="text">{text}</div>
        <div className="icons">
          <i className="ri-pencil-fill" onClick={update}></i>
          <i className="ri-close-circle-fill"onClick={remove}></i>
        </div>
        
    </div>
  )
}

export default Item