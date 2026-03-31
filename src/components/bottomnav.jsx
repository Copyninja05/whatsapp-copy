import { useNavigate,useLocation } from "react-router-dom";

function Buttomnav(){
    const navigate=useNavigate()
    const location=useLocation()
    return(<div className="outer bg-white border-top d-flex justify-content-around py-2">
        <div onClick={()=>navigate('/status')} className="text-center options" style={{cursor:'pointer'}}>
            <i className={`{bi bi-circle fs-5 ${location.pathname==='/status' ? 'text-success':'text-dark'}`}></i>
            <p>Status</p>
        </div>
        <div onClick={()=>navigate('/calls')} className="text-center options" style={{cursor:'pointer'}}>
             <i className={`{bi bi-telephone fs-5 ${location.pathname==='/calls' ? 'text-success':'text-dark'}`}></i>
             <p>calls</p>
        </div>
        <div onClick={()=>navigate('/chats')} className="text-center options" style={{cursor:'pointer'}}>
            <i className={`{bi bi-chat fs-5 ${location.pathname==='/chats' ? 'text-success':'text-dark'}`}></i>
             <p>chats</p>
        </div>
        <div onClick={()=>navigate('/settings')} className="text-center options" style={{cursor:'pointer'}}>
            <i className={`{bi bi-gear fs-5 ${location.pathname==='/settings' ? 'text-success':'text-dark'}`}></i>
             <p>settings</p>
        </div>
        



    </div>)
    
}

export default Buttomnav