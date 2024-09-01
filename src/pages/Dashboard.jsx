import AddComp from "./AddComp"
function Dashboard (){
    return <div className="">
        <div>
            <AddComp/>
        </div>

        <div className="ml-[22%] top-4 fixed">
            <div className=" grid grid-cols-3 gap-6">

            <div className="bg-[#14213d] w-[300px]  text-center pt-[35%] border-b-8  border-b-[#fca311] h-[300px]">
                <h1 className="text-4xl font-bold text-[#e5e5e5]" >0</h1>
                <h1 className="text-[#e5e5e5] ">total complaints</h1>

            </div>
            <div className="bg-[#14213d] w-[300px]  text-center pt-[35%] border-b-8  border-b-[#fca311] h-[300px]">
                <h1 className="text-4xl font-bold text-[#e5e5e5]" >0</h1>
                <h1 className="text-[#e5e5e5] ">total complaints</h1>

            </div>
            <div className="bg-[#14213d] w-[300px] text-center pt-[35%]  border-b-8  border-b-[#fca311] h-[300px]">
                <h1 className="text-4xl font-bold text-[#e5e5e5]" >0</h1>
                <h1 className="text-[#e5e5e5] ">total complaints</h1>

            </div>
            </div>
        </div>

    </div>
}
export default Dashboard