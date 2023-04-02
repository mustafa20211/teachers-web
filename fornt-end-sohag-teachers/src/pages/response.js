import { useLocation } from "react-router"
import Bars from "react-loading-icons/dist/esm/components/bars";
const Response = (props) => {
    const location = useLocation()
    const data = location.state.data;
    const pending = location.state.pending ; 
    return (
        <>
        {pending&&< div className = "loading-container" ><div>جاري التحميل</div><Bars/></div>}
        {data&&< div className = "loading-container" ><div>loading done</div></div>}
        {data&&< div className = "loading-container" ><div>loading done</div></div>}
        </>
    )

}


export default Response ; 