import { CDN_URL } from "../utils/constents"
const Cards=(props)=>{
    console.log(props)
    const {resData}=props
    const {lastMileTravel,deliveryTime}=resData?.info?.sla
    const {cuisines,avgRating,costForTwo,cloudinaryImageId,name}=resData?.info
   
    
   return(
        <div className="res-card">
            <img className="res-img" alt="fooditems" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h3>{avgRating} Stars</h3>
            <h3>{costForTwo}</h3>
            {/* <h3>{deliveryTime} minutes delevery time</h3> 
            <h3>lastMileTravel:{lastMileTravel} </h3>  */}
        </div>
    )
}

export default Cards