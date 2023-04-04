import pendingVedio from '../assets/v1.mp4'
import PendingImage from '../assets/pendding.jpg'
import  Bars from "react-loading-icons/dist/esm/components/bars";
import { useLocation } from 'react-router';
import React from 'react';
const Profile = (props) => {
    
    const location = useLocation()
    const data = location.state.data ; 
    return (<>
    <section className="main-view ">
        <div className="container profile-container">
            <div className="image">
                {data &&<img src={data.img} alt=""></img>}  
            </div>
            {data&&
            <div className="basic-info">
                <h1>{data.name}</h1>
                <h3>{data.title}</h3>
                <h4>{data.lastexp}</h4>
            </div>
            }
        </div>
    </section>
    <section className="exp-vedio">
        <div className="container">
            <div className="exp-element2">
                <h1 className="section-heading">فيديو تعريفى</h1>
                <video controls src={data.null||pendingVedio}></video>
                
            </div>
            <div className="exp-element1">
                <h1 className="section-heading">الخبرات السابقة</h1>

                <div className='exp-element1-sub'>{data.allExp.map(item=><h1 key={item}>{item}</h1>)}</div>


            </div>
        </div>
    </section>
    <section className="contact-places">
        <div className="container">
            <div className="contact">
                <h1 className="section-heading">contact</h1>
                <h3>Phone Number:</h3>
                <a href={data?data.fac:""}>faceBook</a>
                <a href={data?data.whatsApp:""}>WhatsApp</a>
                <a href={data?data.email:""}>email</a>
            </div>
            <div className="available-places">
                <h1 className="section-heading">الاماكن المتاحة</h1>
                {data.areaS.map(item=><p key={item}>{item}</p>)}
            </div>
        </div>
    </section>
    </>
    )
}

export default Profile ; 