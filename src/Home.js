import { useState } from "react";

const Home = () => {
    //let name = 'mario';
    const [name,setName] =useState("mario");

    const [num,setNum] =useState();
    const handleClick =()=>{
       setName('LUIGI');
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <p>{num}</p>
            <button onClick={handleClick}>Click me</button>
            

        </div>
    );
}
 
export default Home;