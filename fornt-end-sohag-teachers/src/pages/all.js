import Card from "../components/card";
import { useState } from "react";
import UseFetch from "../customs/usefetch";
import Bars from "react-loading-icons/dist/esm/components/bars";
import { useParams ,useLocation } from "react-router";
import React from "react";

const AllTeacher = () => {

   
   
     
   const location = useLocation();
   console.log(location.state.level)
   const uri = `/all/${location.state.level}/${location.state.special}` ; 
   console.log(uri )
    const { data, pending, error } = UseFetch(uri)
  
    return ( 
        <section className = "main-view" >
            <div className = "container" >
                <h1 className = "section-heading" >{`${location.state.splevel} - ${location.state.sphead}`}</h1>
                {data&&console.log(data)}
                {data &&<div className = "grid-auto" >{data.map(item=><Card key={item.id} info={item}/>)}</div >}
                {pending && < div className = "loading-container" ><div>جاري التحميل</div><Bars/></div>} 
                {error && <div>error</div>} 
            </div>
            
        </section>
    )
}


export default AllTeacher;