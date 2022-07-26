import React from 'react'

function MobileList(props) {
  return (

    <div className="card border-secondary mb-3 ">
      <div className="card-body ">
        <h5 className="card-title"><b>Title: </b>{props.title}</h5>
        <p className="card-text"><b>Price of the Mobile: </b>{props.price}</p>
      </div>
    </div>
 
 
  )
}

export default MobileList
