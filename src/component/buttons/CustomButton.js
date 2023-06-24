import React, { useState } from "react";


export default function CustomButton(props) {

    const [name, setName] = useState(true)

    const { myname, myClick } = props;
    
    
    return <button type="button" style={{ backgroundColor: name ? 'red' : 'green' }} name="click"
        onClick={() => {
            setName(!name)
            myClick()
        }}>{myname}</button>
}


export const   ButtonTest=()=>{

    return <p>Button</p>
}