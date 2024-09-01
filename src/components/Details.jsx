import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function Details (){
    const params = useParams()

    const [data, setData] = useState([])



    


    const getsingleData = () =>{
        axios.get(`http://localhost:7000/products/single/${params.id}`).then((reponse) =>{
       setData(reponse.data)
  
        }).catch((err) =>{
            console.log(err)
        })

    }
    
    useEffect(() => {
        getsingleData()
    },[])

    

    const deletResult = ()=>{
        axios.delete(`http://localhost:7000/alaab/delete/${params.id}`).then(() =>{
            alert("result has been deleted ")
            
        }).catch((error) =>{
            console.log(error)
        })
    
    }


  return <div className="p-11 ">
    <button onClick={ deletResult }  className="w-[110px] h-[30px] bg-red-500 text-white">Delete</button>
    <h1 className="text-3xl font-bold  mt-4">Complaint</h1>
    <div className="mt-4 ml-4">


            <h1 >{data.titele}</h1>
            <p>{data.description}</p>
    </div>
        </div>
}
export default Details