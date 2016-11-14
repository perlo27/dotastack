import React from 'react'

export default function (props) {
  return (
    <div>
      <h2>{props.location.query.message}</h2>
    </div>
  )
}
