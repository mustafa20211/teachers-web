import Bars from "react-loading-icons/dist/esm/components/bars"; 
import { useState } from "react";
import { object } from "joi";
import usePost from "../customs/usePost";
import { useNavigate } from "react-router";
import React from "react";
const joi = require('joi') ; 
const Rgister = ()=>{
    const uri = '/join'
    const navigate= useNavigate()
    const [posting , setPosting]=useState(false)
    const [inputs , setInputs]= useState({})
    const [formV , setformV]= useState(
        {userName: "", governer: "", specialist: "",
             gridLevel: "", phoneNumber: ""})  
    const{data , pending , error}=usePost(uri , inputs,posting)
    const HandeleSummit = (e)=>{
        e.preventDefault() 
        
        Object.keys(formV).forEach(element => {
            if(formV[element] ===""){
                ;
                console.log(formV[element])
                setformV((pre)=>{
                   return {...pre  , [element]:false}} )}})
       console.log(formV)
       console.log(Object.values(formV))
        const falsy1 =Object.values(formV).indexOf("") ; 
        const falsy2 =  Object.values(formV).indexOf(false);
        console.log(falsy1 , falsy2 , typeof(falsy1))
        if(falsy1===-1 && falsy2===-1)

        { console.log("posted");
        setPosting(true)
        return 
        }else setPosting(null)
    }
  
    const handldeChange = (e)=>{
        const name = e.target.name ; 
        const value = e.target.value ;
        setInputs((previousInput)=> {
            return{...previousInput,[name]:value}})
        switch(name){
            case"userName": 
                var{error}=joi.string().required().min(5)
                .validate(value)
                if (error)setformV((pre)=>{return{...pre, [name]:false}})
                else setformV((pre)=>{return{...pre, [name]:true}})
                break ; 
                case"governer": 
                var{error}=joi.string().required().min(5)
                .validate(value)
                if (error)setformV((pre)=>{return{...pre, [name]:false}})
                else setformV((pre)=>{return{...pre, [name]:true}})
                break ;
                case"specialist": 
                var{error}=joi.string().required().min(5)
                .validate(value)
                if (error)setformV((pre)=>{return{...pre, [name]:false}})
                else setformV((pre)=>{return{...pre, [name]:true}})
                break ;
                case"gridLevel": 
                var{error}=joi.string().required().min(5)
                .validate(value)
                if (error)setformV((pre)=>{return{...pre, [name]:false}})
                else setformV((pre)=>{return{...pre, [name]:true}})
                break ;
                case "phoneNumber": 
                    var{error}=joi.string().length(11).pattern(/^[0-9]+$/).required()
                    .validate(value)
                    if (error)setformV((pre)=>{return{...pre, [name]:false}})
                    else setformV((pre)=>{return{...pre, [name]:true}})
                    break ;
            default: 
                break ; 
        }




    }
    return(
        <>
            <h1 className="section-heading">طلب انضمام</h1>
            <div className="container form-container">
                {(!data&&pending===true)&&<form onSubmit={HandeleSummit} className="form">
                    <input value = {inputs.userName||""} onChange={handldeChange} type="text" name="userName" placeholder="الاسم"></input>
                    {(formV.userName===false)&&<p>{"ادخل الحقل بطريقة صحيحة"}</p>}
                    <input value = {inputs.governer||""} onChange={handldeChange}  type="text" name="governer" placeholder="المحافظة"></input>
                    {(formV.governer===false)&&<p>{"ادخل الحقل بطريقة صحيحة"}</p>}
                   <input value = {inputs.specialist||""} onChange={handldeChange}  type="text" name="specialist" placeholder="التخصص"></input>
                   {(formV.specialist===false)&&<p>{"ادخل الحقل بطريقة صحيحة"}</p>}
                    <input value = {inputs.gridLevel||""} onChange={handldeChange}  type="text" name="gridLevel" placeholder="المرحلة الدراسبة"></input>
                    {(formV.gridLevel===false)&&<p>{"ادخل الحقل بطريقة صحيحة"}</p>}
                    <input value = {inputs.phoneNumber||""} onChange={handldeChange}  type="text" name="phoneNumber" placeholder="رقم الهاتف"></input>
                    {(formV.phoneNumber===false)&&<p>{"ادخل الحقل بطريقة صحيحة"}</p>}
                         <div className="btn">
                        <button className="button">ارسال الطلب</button>
                   </div>
                </form>}

                {(pending===1)&&< div className = "loading-container" ><div>جاري الارسال برجاء الانتظار</div>
                ل<Bars/>
                </div> }
                {(data&&!pending)&&< div className = "loading-container" ><div>تم الارسال </div>
                <div>سيتم التواصل قريبا شكرا</div>
                <button className="button" onClick={e=>navigate('/')}>عودة الى الصفحة الرئيسية</button>
                </div>}
            </div>
        </>

    )
}


export default Rgister ; 