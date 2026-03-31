import Buttomnav from "../components/bottomnav"

function Settingspage(){

    const settings = [
        { icon: 'fa-solid fa-message', label: 'StartMessage' },
        { icon: 'fa-solid fa-globe', label: 'Whatsapp web/app' },
        { icon: 'fa-solid fa-user', label: 'Account' },
        { icon: 'fa-solid fa-comment', label: 'Chat' },
        { icon: 'fa-solid fa-bell', label: 'Notification' },
        { icon: 'fa-solid fa-database', label: 'Data and storage Usage' },
        { icon: 'fa-solid fa-circle-question', label: 'Help' },
        { icon: 'fa-solid fa-share-nodes', label: 'Tell a Friend' },
    ]

    return(
        <div className="body1">
            <div style={{textAlign:'center'}}>
                <h3 className="fs-6">Settings</h3>
            </div>

            <div className="d-flex align-items-center px-3 py-2 border-bottom">
                <div className="flex-shrink-0 me-3">
                    <img src="https://i.pravatar.cc/50?img=8" className="rounded-circle" style={{width:'50px',height:'50px',objectFit:'cover'}}/>
                </div>
                <div className="flex-grow-1">
                    <h4 className="fs-6 mb-0">Krishna Moorthy</h4>
                    <h5 className="fs-6 text-muted mb-0">Fullstack Developer</h5>
                </div>
            </div>

            <div className="container-fluid px-0">
                {settings.map((setting, index) => (
                    <div key={index} className="d-flex align-items-center px-3 py-3 border-bottom">
                        <div className="flex-shrink-0 me-3">
                            <i className={setting.icon} style={{fontSize:'25px'}}></i>
                        </div>
                        <div className="flex-grow-1">
                            <h4 className="fs-6 mb-0">{setting.label}</h4>
                        </div>
                        <div className="flex-shrink-0 text-muted">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                ))}
            </div>

            <Buttomnav/>
        </div>
    )
}

export default Settingspage