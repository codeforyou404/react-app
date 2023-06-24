import React from 'react'

export default function A(props) {



    return (
        <div>A
            <button type='button' onClick={() => { props.updatedValue("Saurabh") }}>add</button>

        </div>
    )
}
