import Cards from "./Cards"
import resList from "../utils/mockData";
import { useState } from "react";
import {resList} from "../utils/mockData"

const Body= ()=>{
   
    const [restroList,setrestroList]=useState(resList)
    

    return(
        <div className="body">
            {/* <div className="search">
                <input type="text" placeholder="search"/>
            </div>  */}
            <div className="filter-card">
              <button className="filter-btn" onClick={()=>{
              setrestroList(restroList.filter(
                (res)=> res.info.avgRating >= 4.5 
                ));
              }} >Top Rated Restaurents</button>
            </div>
            <div className="rescard-container">
            {
                restroList.map((resturent)=>(
                 <Cards key={resturent.info.id} resData={resturent}/>
                )
                )
              }         
            </div>
        </div>
    )

}


export default Body;