import { useNavigate } from 'react-router';
import React from 'react';
import Bars from 'react-loading-icons/dist/esm/components/bars';
import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.png'
import cover from '../assets/cover.png'
import { useState } from "react";
import UseFetch from "../customs/usefetch";
import { L1 , L2 , L3 } from '../customs/LocalData';
import { useRef } from 'react';
const Home = () => {
    const ref1=useRef(null); 
    const ref2 =useRef(null);
    const ref3 =useRef(null)
    const { data, pending, error } = UseFetch('/home')
    const HandelClick = (e, item)=>{
        console.log(item)
        navigate("all"
        ,{state:{level:item.level , splevel:item.SPlevel , special:item.special , sphead:item.Sphead }})
    }
    const navigate = useNavigate() ; 
    const [current , setCurrent] = useState(null)
    const handelStyleChange = (name , e)=>{
        let currentDiv ; 
        switch(name){
            case '1':
                (current===L1)?setCurrent(null):setCurrent(L1);
                currentDiv=ref1;
                break ; 
            case '2':
                (current===L2)?setCurrent(null):setCurrent(L2);
                currentDiv=ref2;
                break ; 
            case '3':
                (current===L3)?setCurrent(null):setCurrent(L3);
                currentDiv=ref3;
                break ; 
            default: 
                break;
        }

        
        const top = currentDiv.current.clientTop ; 
        const height =currentDiv.current.offsetHeight ; 
        const bot = top +height ; 
        console.log(height , top)
        currentDiv.current.scrollIntoView({block:"center"} )


    }
    
        return (<>
        
        <section >
            <div className="container">
                <div className="home-section-part1">
                    <div className=''>
                        <img src={cover} alt="find your teacher" />
                    </div>
                    <div>
                        <div className='home-description'>
                        <h2>منصة لعرض معلمون سوهاج </h2>
                        <h2>جميع المراحل والتخصصات</h2>
                        <h2>الوصول الى افضل المعلمون</h2>
                        <h2>عرض اوائل الطلاب فى جميع المراحل</h2>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section >
            <div className="container">
                <hr className=''/>
                <h1 className='section-heading'>قائمة المعلمون</h1>
                </div>
            <div className="container">
                <div className="home-card-holder">
                   <div className='home-card'  onClick={()=>handelStyleChange('1') } ref={ref1}>
                        <div className='image' ><img src={home1} alt="" /></div>
                        <h1>المرحلة الابتدائية صفوف اولى</h1>
                        <ul>
                            {(current===L1)&&current.map((item)=><li  key={item.id} onClick={(e)=>{HandelClick(e,item)}}>{item.Sphead}</li>)}
                        </ul>
                    </div> 
                    <div className='home-card'onClick={()=>handelStyleChange('2')} ref={ref2} >
                        <div className='image'><img src={home1} alt=""></img></div>
                        <h1>المرحلة الابتدائية صفوف عليا</h1>
                        <ul>
                            {(current===L2)&&current.map((item)=><li  key={item.id} onClick={(e)=>{HandelClick(e,item)}}>{item.Sphead}</li>)}
                        </ul>
                    </div> 
                    <div className='home-card' onClick={()=>handelStyleChange('3') } ref={ref3}>
                        
                        <div className='image'><img src={home1} alt="" /></div>
                        <h1>المرحلة الاعدادية</h1>
                        <ul>
                            {(current===L3)&&current.map((item)=><li  key={item.id} onClick={(e)=>{HandelClick(e,item)}}>{item.Sphead}</li>)}
                        </ul>
                    </div> 
                </div>
            </div>      
        </section>
        <section >
            <div className="container">
                <hr />
                <h1 className='section-heading'>لوحة شرف الطلاب</h1>
                <div className=''>
                {pending&&< div className = "loading-container" ><div>جاري التحميل</div><Bars/></div>}
                {data&&<div className='home-section-part3'>
                 {data.map(item=><div className='honering-card ' key={item.id}>
                    <div className='image'><img src={item.img} alt="" /></div>
                    <p>{item.name+"__"+item.school}</p>
                    <p>{item.level+"__"+item.excellent}</p>

                 </div>)}
                </div>
                }
               
            </div>
           
                </div>

            </section>
        </>
)}


export default Home;