import { useState } from "react";
import ReactDOM from 'react-dom/client';


function FCreateCar(){
  const [name,setName] = useState("");

  return(<form>
    <label>Enter Name car
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </label>
    <button onClick={()=> console.log(name)}></button>
  </form>)
}


export default FCreateCar;