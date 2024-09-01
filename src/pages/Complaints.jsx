import AddComp from "./AddComp"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom" 

function Complaints (){
    
    const [Complaint,setComplaint] = useState([])

    const handleGet  = () =>{
        axios.get("http://localhost:7000/products").then((response) =>{
            setComplaint(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() =>{
        handleGet()
    },[])

    return <div className="flex  ">
      <AddComp/>
     <div className=" p-5 ">
        <div></div>
  

   <div>
    <table className="w-[900px] mt-6  text-center">
        <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
        </tr>


        {
           Complaint.map((data , index)=>{
            return <tr key={data._id}>
                <td className="border-2 p-1">{index+1}</td>
                <td className="border-2 p-1">{data.titele}</td>
                <td className="border-2 p-1">{data.description}</td>
                <td className="border-2 p-1">{data.issueDate}</td>
                <td className="border-2 p-1"> <Link to={`/Details/${data._id}`}><button className="w-[90px] h-[30px] bg-[#fca311] text-[#14213d]    rounded-md"> Details</button></Link>  </td>
            </tr>
           }) 
        }
    </table>
   </div>
   
    </div>

    </div>
} 
export default Complaints