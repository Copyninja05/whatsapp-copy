import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Authpage() {
  const navigate = useNavigate()
  const [country, setCountry] = useState([])
  const [showList, setShowList] = useState(false)
  const [loading, setLoading] = useState(true)
  const [phone, setPhone] = useState("")
  const [selected, setSelected] = useState({
    name: "United States",
    code: "+1"
  })
  const [phones,setphones]=useState("")
  const handledial=(value)=>{
    
    setphones(prev=>prev+value
    )
  }

  // API fetch
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd")
      .then((res) => res.json())
      .then((data) => {
        const result = data
          .filter((c) => c.idd.root)
          .map((c) => ({
            name: c.name.common,
            code: c.idd.root + (c.idd.suffixes?.[0] || "")
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
        setCountry(result)
        setLoading(false)
      })
      .catch((err) => {
        console.log("API Error:", err)
        setLoading(false)
      })
  }, [])

  const handleSelect = (c) => {
    setSelected(c)
    setShowList(false)
  }

  const handleDone = () => {
    if (phone.length >= 6) {
      navigate('/chats')
    } else {
      alert("Enter valid phone number!")
    }
  }

  return (
    <div style={{width:'400px', margin:'auto', padding:'20px'}}>

      {/* Header */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h4>Phone number</h4>
        <h6
          onClick={handleDone}
          style={{color:'#007AFF', cursor:'pointer', margin:0}}>
          Done
        </h6>
      </div>

      {/* Subtitle */}
      <div style={{textAlign:'center', margin:'15px 0'}}>
        <p style={{color:'grey', fontSize:'14px'}}>
          Please confirm your country code and enter your mobile number
        </p>
      </div>

      {/* Country Selector */}
      <div
        onClick={() => setShowList(!showList)}
        style={{display:'flex', justifyContent:'space-between',
          alignItems:'center', borderBottom:'1px solid #ddd',
          padding:'10px', cursor:'pointer'}}>
        <h5 style={{color:'#007AFF', margin:0}}>{selected.name}</h5>
        <i className="bi bi-chevron-right" style={{color:'grey'}}></i>
      </div>

      {/* Country Dropdown */}
      {showList && (
        <div style={{border:'1px solid #ddd', maxHeight:'200px',
          overflowY:'scroll', borderRadius:'8px', marginTop:'5px'}}>
          {loading ? (
            <div style={{padding:'10px', textAlign:'center'}}>
              Loading countries...
            </div>
          ) : (
            country.map((c, i) => (
              <div
                key={i}
                onClick={() => handleSelect(c)}
                style={{padding:'10px', borderBottom:'1px solid #eee',
                  cursor:'pointer', fontSize:'14px'}}>
                {c.name} ({c.code})
              </div>
            ))
          )}
        </div>
      )}

      {/* Phone Input */}
      <div style={{display:'flex', alignItems:'center', marginTop:'15px', gap:'10px'}}>
        <h5 style={{margin:0, minWidth:'40px'}}>{selected.code}</h5>
        <input
          placeholder="Phone number"
          value={phones}
          onChange={(e) => setPhone(e.target.value)}
          style={{border:'none', borderBottom:'1px solid #ddd',
            width:'100%', padding:'8px', outline:'none', fontSize:'16px'}}
        />
      </div>


      {/* dialpad */}
            <div style={{width:'80%',margin:'auto',display:'flex',flexWrap:'wrap'}}>
                      <div className="dial" onClick={()=>handledial("1")}>
                        <h1>1</h1>
                        <p>ABCD</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("2")}>
                        <h1>2</h1>
                        <p>EFG</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("3")}>
                        <h1>3</h1>
                        <p>HIJ</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("4")}>
                        <h1>4</h1>
                        <p>KLMN</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("5")}>
                        <h1>5</h1>
                        <p>OPQ</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("6")}>
                        <h1>6</h1>
                        <p>RST</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("7")}>
                        <h1>7</h1>
                        <p>UVW</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("8")}>
                        <h1>8</h1>
                        <p>XY</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("9")}>
                        <h1>9</h1>
                        <p>Z</p>
                      </div>
                      <div className="dial" onClick={()=>handledial("*")}>
                        <h1>*</h1>
                      </div>
                      <div className="dial" onClick={()=>handledial("0")}>
                        <h1>0</h1>
                      </div>
                      <div className="dial" onClick={()=>handledial("#")}>
                        <h1>#</h1></div>  
            </div>
    </div>
  )
}

export default Authpage