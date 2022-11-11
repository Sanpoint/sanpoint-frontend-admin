import './App.css';
import PrimarySearchAppBar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import BasicCard from "./components/Home/home";
function App() {
  return (
   <>
    <PrimarySearchAppBar/>
    <Routes>
      <Route path="/" element={<BasicCard/>}/>
    </Routes>

   </>
  );
}

export default App;
