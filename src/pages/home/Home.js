import React, { useState } from "react";
import './home.css';
import CustomButton from "../../component/buttons/CustomButton";


function Home() {

    const handle1 = () => { alert(1) }
    const handle2 = () => { alert(2) }
    const handle3 = () => { alert(3) }

    return <div className="home-container" >
        <label>Home</label>
        <CustomButton myname="saurbh" myClick={handle1} />
        <CustomButton myname="saurbh" myClick={handle2} />
        <CustomButton myname="saurbh" myClick={handle3} />
    </div>
}

export default Home