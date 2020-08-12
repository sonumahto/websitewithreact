import React from 'react'

export default function Heading(props) {
    return (
        <div>
            <div className="container section-title">
          <h2>{props.title}</h2>
        </div>
        </div>
    )
}
