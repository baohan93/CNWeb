
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Footer, Header} from "./components";
import {Home,Contact,Login,Register,Reset} from "./pages";


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/contact" element ={<Contact/>}></Route>
          <Route path="/login" element ={<Login/>}></Route>
          <Route path="/register" element ={<Register/>}></Route>
          <Route path="/Reset" element ={<Reset/>}></Route>
        </Routes>
        <Footer/>

        
      </BrowserRouter>

    </>
  );
}

export default App;
//phut 55