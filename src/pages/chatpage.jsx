import Buttomnav from '../components/bottomnav'
import chats from '../data/chats'
import { useNavigate } from 'react-router-dom'

function ChatsPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-white" style={{maxWidth:'480px', margin:'0 auto'}}>
      
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
        <h5 className="mb-0 fw-bold">Chats</h5>
        <div>
          <i className="bi bi-camera-video fs-5 me-3"></i>
          <i className="bi bi-pencil-square fs-5"></i>
          
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2">
        <div className="bg-light rounded-pill px-3 py-1 d-flex align-items-center">
          <i className="bi bi-search text-secondary me-2"></i>
          <input type="text" className="border-0 bg-transparent w-100" placeholder="Search" style={{outline:'none'}} />
        </div>
      </div>

      {/* Chats List */}
      <div style={{paddingBottom:'70px'}}>
        {chats.map(chat => (
          <div key={chat.id} className="d-flex align-items-center px-3 py-2 border-bottom" 
             style={{cursor:'pointer'}}>
            <img src={chat.avatar} className="rounded-circle me-3" width="50" height="50" />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <span className="fw-bold">{chat.name}</span>
                <span className="text-secondary" style={{fontSize:'12px'}}>{chat.time}</span>
              </div>
              <p className="mb-0 text-secondary" style={{fontSize:'14px'}}>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>

      <Buttomnav />
    </div>
  )
}

export default ChatsPage