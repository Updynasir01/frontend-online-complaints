import { NavLink } from "react-router-dom"



function AddComp (){
    return <div className="p-8 pt-11  bg-[#14213d] w-[21%] h-screen">
        <h1 className="text-3xl font-semibold text-[#e5e5e5] ">Complaint Center</h1>
   <ul className="text-2xl text-[#e5e5e5] mt-[15%] ">
 <NavLink to={"/Dashboard"}><li className="mt-5  "> <i class="fa-brands fa-microsoft mr-3 "></i>Dashboard</li> </NavLink> 
   <NavLink to={"/Complaints"}><li className="mt-5  "> <i class="fa-solid fa-book mr-3"></i>Complaints</li></NavLink> 
    <NavLink to={"/"}> <li className="mt-5  "><i class="fa-solid fa-power-off mr3"></i> Logout</li></NavLink>
    </ul>      

    </div>
}
export default AddComp