import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


function Body(){
    
    

  const [titele, setTitele] = useState("")
  const [description, setDescription] = useState ("")

  const addComplaint = () =>{

    axios.post("http://localhost:7000/create", {
        "titele" : titele,
        "description": description

    }).then(() => {
        alert("data has been saved")
    }).catch((error) =>{
        console.log(error)
    })
        

    
}

    const [isOpen, setitOpen] = useState(false)
    const handleOpen = () =>{
        setitOpen(true)
    }
    const handleClose = () =>{
        setitOpen(false)
    }

    return <div>
    

        <div className="flex justify-between bg-[#fca311]  p-8">
            <h1 className="text-4xl font-bold text-white   ">OCMS</h1>
            <ul className="flex gap-11 text-2xl text-white  font-semibold">
                <li>Home</li>
                <li>About</li>
            </ul>
            <Link to="/Dashboard" ><button  className=" w-[110px] h-[40px] rounded-3xl bg-white ">Admin area</button> </Link>
        </div>
        <div className="bg-[#14213d] w-full p-8 h-[635px] text-center  ">
           <h1 className=" text-[#e5e5e5] text-6xl font-semibold mt-[120px]">Make your complaints way easier ever</h1>
           <p className=" text-[#e5e5e5] text-1xl  mt-[10px]">We are committed to solve your complaints. Make any complaints you could have.</p>
           <button onClick={handleOpen} className="w-[181px] h-[51px] bg-[#fca311] rounded-lg text-white mt-[30px] ">Make Complaint</button>

        </div>
        
        <div style={{display : isOpen == true ? "block" : ""}} className="bg-black hidden bg-opacity-35 fixed top-0 h-screen w-full">
            
        <div  className="p-5 fixed top-0  mt-[15%] ml-[38%] w-[350px] bg-white  text-center h-[430px] border-2 border-black">
        <label>Send us your complaints please. </label><br></br>
        <input value={titele} onChange={(event) => setTitele(event.target.value)} className="border-2 border-black p-3 w-[300px] h-[30px]" type="text" placeholder="Enter Title"></input>
        <textarea  value={description} onChange={(event) => setDescription(event.target.value)}  cols={38} rows={11} className=" border-2 border-black mt-2" typeof="text" placeholder="Enter description" ></textarea>
        <button onClick={handleClose}  className="w-[100px] h-[40px] bg-[#14213d] rounded-lg text-[#fca311]  ">CLose</button>
        <button onClick={addComplaint} className="w-[100px] h-[40px] bg-[#fca311] ml-2 rounded-lg text-[#14213d]  ">Send</button>

        </div>
        
        </div>


    </div>
}
export default Body