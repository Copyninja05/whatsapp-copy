import { useNavigate } from 'react-router-dom'
import Buttomnav from '../components/bottomnav'
import calls from '../data/calls'

function Callspage() {
  const navigate = useNavigate()

  return (
    <div className="body">

      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
        <h3 className="fs-6 mb-0">Edit</h3>
        <div className="d-flex gap-3">
          <h5 className="fs-6 mb-0">All</h5>
          <h5 className="fs-6 mb-0">Missed Call</h5>
        </div>
        <i className="fa-solid fa-phone"></i>
      </div>

      {/* Calls List */}
      <div className="container-fluid px-0">
        {calls.map((call, index) => (
          <div
            key={index}
            className="d-flex align-items-center px-3 py-2 border-bottom"
          >
            {/* Avatar */}
            <div className="flex-shrink-0 me-3">
              <img
                src={call.avatar}
                alt={call.name}
                className="rounded-circle"
                style={{ height: '50px', width: '50px', objectFit: 'cover' }}
              />
            </div>

            {/* Name & Type */}
            <div className="flex-grow-1">
              <h4 className="fs-6 mb-0">{call.name}</h4>
              <h5 className="fs-6 text-muted mb-0">{call.type}</h5>
            </div>

            {/* Time */}
            <div className="flex-shrink-0 text-muted small">
              {call.time}
            </div>
          </div>
        ))}
      </div>

      <Buttomnav />
    </div>
  )
}

export default Callspage