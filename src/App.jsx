import { Routes,Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <main className="w-[50rem] min-h-[20rem] max-h-[30rem] border mx-auto shadow-lg p-4 space-y-4 ">
      <Navbar/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/users"} element={<Users/>}/>
        </Routes>
      <Footer/>
    </main>
  );
}

export default App;
