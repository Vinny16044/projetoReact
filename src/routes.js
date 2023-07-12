import { BrowserRouter, Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import Sobre from "./pages/Sobre";

import Contato from "./pages/Contato";

import Error from "./pages/Error";


function RoutesApp(){
    return(

    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>



        <Route path="*" element={<Error/>} ></Route>
    </Routes>
    </BrowserRouter>


    )
}
export default RoutesApp;