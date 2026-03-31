import status from "../data/status"
import Buttomnav from "../components/bottomnav"
function Statuspage(){
    return(<div style={{width:'500px',margin:'auto'}}>
        <div style={{display:'flex',gap:'20%',alignItems:'center',justifyContent:'center',padding:'15px'}}>
                <span style={{color:'blue'}}>Privacy</span>
                <span>Status</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
            <img src="https://i.pravatar.cc/50?img=8" style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
            <div>
            <h4>My Status</h4>
            <p>Add to my story</p>
            </div>
            <i class="fa-solid fa-camera"></i> 
            <i class="fa-solid fa-pencil"></i> 
        </div>

         <div style={{margin:'10px',width:'100%'}}>
            { status.map((status)=>
            <div style={{width:'100%',padding:'10px'}}>
                <div style={{border:`3px solid ${status.seen ? "gray":"green"}`,width:'60px',height:'60px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} 
                >
                    <img src={status.avatar} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
                    </div>
                    <div style={{justifyContent:'space-between',display:'flex'}}>
                        <h4>{status.name}</h4>
                        <p>{status.time}</p>
                    </div>

            </div>
            )}
        </div>
        <Buttomnav />
        
    </div>)
}

export default Statuspage
