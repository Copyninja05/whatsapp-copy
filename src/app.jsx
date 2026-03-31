import { BrowserRouter,Routes,Route } from "react-router-dom";
import Authpage from './pages/authpage'
import Callspage from './pages/callspage'
import Chatconversation from './pages/chatconversation'
import Chatpage from './pages/chatpage'
import Contactinfopage from './pages/contactinfopage'
import Settingspage from './pages/settingspage'
import Statuspage from './pages/statuspage'

function App(){
return(<BrowserRouter basename="/whatsapp-copy/">
    <Routes>
        <Route path="/" element={<Authpage />}/>
        <Route path="/calls" element={<Callspage />}/>
        <Route path="/chat/:id" element={<Chatconversation/>}/>
        <Route path="/chats" element={<Chatpage/>}/>
        {/* <Route path="/contact/:id" element={<Contactinfopage/>}/> */}
        <Route path="/settings" element={<Settingspage/>}/>
        <Route path="/status" element={<Statuspage/>}/>
    </Routes>
    
    </BrowserRouter>)
}

export default App


