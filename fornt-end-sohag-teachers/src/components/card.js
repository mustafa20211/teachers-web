import { Link,  } from "react-router-dom"
import React from "react";

const Card = (props)=>{
  
    return(
       
        <Link to={"profile"}className="card" state={{data:props.info}} >
        <div className="image">
            <img src={props.info.img} alt=""></img>
        </div>
        <div className="breif-info">
            <h1>{props.info.name} </h1>
            <h3>{props.info.title} </h3>
            <h5>{props.info.lastexp} </h5>
        </div>
    </Link>
    )

}

export default Card ; 