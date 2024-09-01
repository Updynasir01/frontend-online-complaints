import { Route,Routes } from "react-router-dom"
import AddComp from "./pages/AddComp"
import Body from "./components/Body"
import Complaints from "./pages/Complaints"
import Details from "./components/Details"
import Dashboard from "./pages/Dashboard"


function App () {
    return <Routes>
        <Route path="/AddComp" element={<AddComp/>}/>
        <Route path="/" element={<Body/>}/>
        <Route path="/Complaints" element={<Complaints/>}/>
        <Route path="/Details/:id" element={<Details/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>

    </Routes>
}
export default App